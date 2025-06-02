const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Course = require('../models/Course');
const User = require('../models/User');

// @desc    Create payment intent
// @route   POST /api/payments/create-payment-intent
exports.createPaymentIntent = async (req, res) => {
  const { courseId } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: course.price * 100, // in cents
      currency: 'usd',
      metadata: { courseId, userId: req.user.id }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc    Confirm payment and enroll
// @route   POST /api/payments/confirm
exports.confirmPayment = async (req, res) => {
  const { paymentIntentId, courseId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    if (paymentIntent.status !== 'succeeded') {
      return res.status(400).json({ error: 'Payment not completed' });
    }

    // Enroll user in course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    if (course.studentsEnrolled.includes(req.user.id)) {
      return res.status(400).json({ error: 'Already enrolled in this course' });
    }

    course.studentsEnrolled.push(req.user.id);
    await course.save();

    // Add course to user's enrolled courses
    const user = await User.findById(req.user.id);
    user.coursesEnrolled.push(course._id);
    await user.save();

    res.json({ message: 'Payment confirmed and enrollment successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
};
const request = require('supertest');
const app = require('../server');
const Course = require('../models/Course');
const User = require('../models/User');

let token;

beforeAll(async () => {
  // Login as instructor to get token
  await User.create({
    name: 'Instructor',
    email: 'instructor@example.com',
    password: 'password123',
    role: 'instructor'
  });

  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'instructor@example.com',
      password: 'password123'
    });
  token = res.body.token;
});

describe('Courses API', () => {
  afterAll(async () => {
    await Course.deleteMany();
    await User.deleteMany();
  });

  describe('POST /api/courses', () => {
    it('should create a new course', async () => {
      const res = await request(app)
        .post('/api/courses')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Course',
          description: 'Test Description',
          price: 99,
          category: 'Development'
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('title', 'Test Course');
    });
  });

  describe('GET /api/courses', () => {
    it('should get all courses', async () => {
      const res = await request(app)
        .get('/api/courses');
      expect(res.statusCode).toEqual(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
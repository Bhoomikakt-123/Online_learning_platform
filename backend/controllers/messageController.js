// controllers/messageController.js
exports.getConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({
      participants: req.user.id
    })
    .populate('participants', 'name email')
    .sort('-updatedAt');

    res.json(conversations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Temporary mock endpoint
router.get('/api/messages/conversations', (req, res) => {
  // Mock data - replace with real database queries
  res.json([
    {
      _id: '1',
      participant: { name: 'John Doe', email: 'john@example.com' },
      lastMessage: 'Hello there!'
    },
    {
      _id: '2',
      participant: { name: 'Jane Smith', email: 'jane@example.com' },
      lastMessage: 'About the assignment...'
    }
  ]);
});
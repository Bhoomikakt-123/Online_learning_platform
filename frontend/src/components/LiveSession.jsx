import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText } from '@mui/material';

const LiveSession = ({ session }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: 'Instructor', text: 'Welcome everyone to today\'s session!' },
    { id: 2, user: 'Student1', text: 'Excited to be here!' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { id: Date.now(), user: 'You', text: message }]);
      setMessage('');
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Live Session: {session?.title || 'Introduction to React'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {session?.description || 'Join our live coding session'}
        </Typography>
        
        <div style={{ margin: '20px 0', border: '1px solid #eee', padding: '10px', borderRadius: '4px' }}>
          <Typography variant="h6">Live Video Stream</Typography>
          <div style={{ background: '#000', color: '#fff', padding: '40px', textAlign: 'center', margin: '10px 0' }}>
            Live Video Feed Would Appear Here
          </div>
        </div>
        
        <div style={{ margin: '20px 0' }}>
          <Typography variant="h6">Live Chat</Typography>
          <List style={{ maxHeight: '200px', overflow: 'auto', border: '1px solid #eee', borderRadius: '4px' }}>
            {chatMessages.map(msg => (
              <ListItem key={msg.id}>
                <ListItemText 
                  primary={msg.user} 
                  secondary={msg.text} 
                  primaryTypographyProps={{ fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
          </List>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <Button 
              variant="contained" 
              onClick={handleSendMessage}
              sx={{ ml: 1 }}
            >
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveSession;
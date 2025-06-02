import React, { useState, useEffect } from 'react';
import { 
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Paper,
  Box
} from '@mui/material';
import axios from 'axios';

const MessagesPage = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        // Simulate API call - replace with your actual endpoint
        const response = await axios.get('/api/messages/conversations');
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Loading messages...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      
      <Paper elevation={3} sx={{ p: 2 }}>
        {conversations.length > 0 ? (
          <List>
            {conversations.map((conversation, index) => (
              <React.Fragment key={conversation._id}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      {conversation.participant.name.charAt(0)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={conversation.participant.name}
                    secondary={conversation.lastMessage}
                  />
                </ListItem>
                {index < conversations.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography variant="body1">No messages yet</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default MessagesPage;
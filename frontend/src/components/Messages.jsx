import React from 'react';
import { Typography } from '@mui/material'; // Add this import

const Messages = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Messages
      </Typography>
      {/* Your messages content here */}
    </div>
  );
};

export default Messages;
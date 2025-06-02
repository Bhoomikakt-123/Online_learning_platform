import React from 'react';
import { Typography } from '@mui/material';
import LiveSession from '../components/LiveSession';

const LiveSessions = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Live Sessions
      </Typography>
      <LiveSession />
    </div>
  );
};

export default LiveSessions;
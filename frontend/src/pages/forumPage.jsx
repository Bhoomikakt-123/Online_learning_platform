import React from 'react';
import { Typography } from '@mui/material';
import Forum from '../components/Forum';

const ForumPage = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Discussion Forum
      </Typography>
      <Forum />
    </div>
  );
};

export default ForumPage;
import React from 'react';
import { Typography } from '@mui/material';
import CourseList from '../components/CourseList';
import OfflineContent from '../components/OfflineContent';

const Courses = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        All Courses
      </Typography>
      <CourseList />
      
      <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
        Offline Content
      </Typography>
      <OfflineContent />
    </div>
  );
};

export default Courses;
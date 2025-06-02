import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import CourseList from '../components/CourseList';

const Home = () => {
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Online Learning Platform
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            Featured Courses
          </Typography>
          <CourseList />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
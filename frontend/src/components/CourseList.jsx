import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        // For demo purposes, use mock data if API fails
        setCourses([
          { id: 1, title: 'Introduction to React', description: 'Learn React fundamentals' },
          { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JS concepts' },
          { id: 3, title: 'Node.js Basics', description: 'Backend development with Node' }
        ]);
      }
    };
    fetchCourses();
  }, []);

  return (
    <Grid container spacing={3}>
      {courses.map(course => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {course.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {course.description}
              </Typography>
              <Button 
                variant="contained" 
                size="small" 
                sx={{ mt: 2 }}
                href={`/courses/${course.id}`}
              >
                View Course
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                sx={{ mt: 2, ml: 1 }}
                onClick={() => downloadForOffline(course.id)}
              >
                Download
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const downloadForOffline = (courseId) => {
  // In a real app, this would fetch course content and store it in IndexedDB or Cache
  console.log(`Downloading course ${courseId} for offline use`);
  alert('Course content will be available offline');
};

export default CourseList;
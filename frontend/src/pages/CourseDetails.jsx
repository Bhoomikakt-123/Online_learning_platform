import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        console.log('Attempting to fetch course with ID:', id);
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        console.log('API Response:', response.data);
        
        if (!response.data) {
          throw new Error('Empty response from server');
        }
        
        setCourse(response.data);
      } catch (err) {
        console.error('API Error Details:', {
          message: err.message,
          response: err.response?.data,
          status: err.response?.status
        });
        setError(err.response?.data?.error || 'Failed to load course. Please try again.');
      }
    };

    fetchCourse();
  }, [id]);

  if (error) {
    return (
      <div className="error-message">
        <h3>Error Loading Course</h3>
        <p>{error}</p>
        <p>Course ID: {id}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!course) return <div>Loading course details...</div>;

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {/* Render other course details */}
    </div>
  );
};

export default CourseDetails;
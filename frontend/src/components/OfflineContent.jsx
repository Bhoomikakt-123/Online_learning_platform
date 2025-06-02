import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';

const OfflineContent = () => {
  const [downloadedContent, setDownloadedContent] = useState([]);

  // Mock function to simulate downloaded content
  useEffect(() => {
    // In a real app, this would fetch from IndexedDB or cache
    const mockContent = [
      { id: 1, title: 'React Basics PDF', type: 'PDF', size: '2.4 MB' },
      { id: 2, title: 'JavaScript Video Lecture', type: 'Video', size: '45.2 MB' },
      { id: 3, title: 'Course Notes Week 1', type: 'Text', size: '0.5 MB' },
    ];
    setDownloadedContent(mockContent);
  }, []);

  const handleDownloadMore = () => {
    // In a real app, this would open a dialog to select content to download
    alert('Select content to download for offline use');
  };

  const handleDeleteContent = (id) => {
    setDownloadedContent(downloadedContent.filter(item => item.id !== id));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Offline Content
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Content downloaded for offline access will appear here. You can view this content even without an internet connection.
        </Typography>
        
        <Button 
          variant="contained" 
          startIcon={<DownloadIcon />}
          onClick={handleDownloadMore}
          sx={{ mb: 3 }}
        >
          Download More Content
        </Button>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Your Downloaded Content
        </Typography>
        
        {downloadedContent.length > 0 ? (
          <List>
            {downloadedContent.map(item => (
              <ListItem 
                key={item.id}
                secondaryAction={
                  <Button 
                    variant="outlined" 
                    size="small" 
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteContent(item.id)}
                  >
                    Remove
                  </Button>
                }
              >
                <ListItemText 
                  primary={item.title} 
                  secondary={`${item.type} • ${item.size}`} 
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No content downloaded yet.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default OfflineContent;
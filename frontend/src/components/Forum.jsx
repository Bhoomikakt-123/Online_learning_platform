import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, List, ListItem, ListItemText, Divider } from '@mui/material';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'How to use React hooks?', author: 'Student1', content: 'I\'m new to React hooks, any tips?', comments: [] },
    { id: 2, title: 'Project help needed', author: 'Student2', content: 'Stuck on my final project, can someone help?', comments: [] },
  ]);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [activePost, setActivePost] = useState(null);
  const [comment, setComment] = useState('');

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        author: 'You',
        content: newPostContent,
        comments: []
      };
      setPosts([newPost, ...posts]);
      setNewPostTitle('');
      setNewPostContent('');
    }
  };

  const handleAddComment = () => {
    if (comment.trim() && activePost) {
      const updatedPosts = posts.map(post => {
        if (post.id === activePost.id) {
          return {
            ...post,
            comments: [...post.comments, { id: Date.now(), author: 'You', content: comment }]
          };
        }
        return post;
      });
      setPosts(updatedPosts);
      setComment('');
    }
  };

  return (
    <div>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            Create New Post
          </Typography>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Content"
            variant="outlined"
            multiline
            rows={4}
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleCreatePost}>
            Post
          </Button>
        </CardContent>
      </Card>

      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Discussion Forum
      </Typography>

      {posts.map(post => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Posted by {post.author}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
              {post.content}
            </Typography>
            
            <Button 
              size="small" 
              onClick={() => setActivePost(activePost?.id === post.id ? null : post)}
            >
              {activePost?.id === post.id ? 'Hide Comments' : 'Show Comments'}
            </Button>

            {activePost?.id === post.id && (
              <div style={{ marginTop: '10px' }}>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1">Comments</Typography>
                <List>
                  {post.comments.length > 0 ? (
                    post.comments.map(comment => (
                      <ListItem key={comment.id}>
                        <ListItemText 
                          primary={comment.author} 
                          secondary={comment.content} 
                          primaryTypographyProps={{ fontWeight: 'bold' }}
                        />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText secondary="No comments yet" />
                    </ListItem>
                  )}
                </List>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                  />
                  <Button 
                    variant="contained" 
                    onClick={handleAddComment}
                    sx={{ ml: 1 }}
                  >
                    Post
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Forum;
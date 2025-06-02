import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

// Courses
export const getCourses = () => api.get('/courses');
export const getCourseById = (id) => api.get(`/courses/${id}`);
export const downloadCourse = (id) => api.get(`/courses/${id}/download`);

// Live Sessions
export const getLiveSessions = () => api.get('/live-sessions');
export const joinSession = (id) => api.post(`/live-sessions/${id}/join`);

// Forum
export const getForumPosts = () => api.get('/forum/posts');
export const createForumPost = (post) => api.post('/forum/posts', post);
export const addComment = (postId, comment) => api.post(`/forum/posts/${postId}/comments`, comment);

// Messages
export const getConversations = () => api.get('/messages/conversations');
export const getMessages = (conversationId) => api.get(`/messages/conversations/${conversationId}`);
export const sendMessage = (conversationId, message) => api.post(`/messages/conversations/${conversationId}`, { text: message });

export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


export const fetchVideo = (videoId) => api.get(`/videos/single?video_id=${videoId}`);
export const fetchVideos = (user_id) => api.get(`/videos?user_id=${user_id}`);
export const createVideo = (data) => api.post('/videos', data);
export const fetchComments = (videoId) => api.get(`/videos/comments?video_id=${videoId}`);
export const postComment = (videoId, comment, user_id) => api.post(`/videos/comments`, { video_id: videoId, content: comment, user_id });

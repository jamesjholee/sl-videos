import { createContext, useReducer, useContext } from 'react';

const VideoContext = createContext();

const videoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VIDEO':
      console.log(state, action.payload)
      return { ...state, ...action.payload.data };
    case 'SET_VIDEOS':
      return { ...state, ...action.payload };
    case 'ADD_VIDEO':
      return { ...state, videos: [...state.videos, action.payload] };
    case 'SET_COMMENTS':
      return { ...state, ...action.payload.data };
    case 'ADD_COMMENT':
      return { ...state, comments: [state.comments, action.payload] };
    case 'SET_USER_ID':
      return { ...state, user_id: action.payload };
    default:
      return state;
  }
};

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, { videos: [], comments: [], user_id: '' });

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);

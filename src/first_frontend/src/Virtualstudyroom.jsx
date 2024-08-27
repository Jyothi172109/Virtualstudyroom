import React from 'react';
import VideoChat from './VideoChat';
import Whiteboard from './Whiteboard';
import ChatBox from './ChatBox';
import UserList from './UserList';
import Controls from './Controls';

const App = () => {
  return (
    <div className="app">
      <div className="video-chat">
        <VideoChat />
      </div>
      <div className="main-content">
        <Whiteboard />
        <ChatBox />
      </div>
      <div className="user-list">
        <UserList />
      </div>
      <div className="controls">
        <Controls />
      </div>
    </div>
  );
};

export default Virtualstudyroom;

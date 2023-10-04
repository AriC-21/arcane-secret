import React from 'react';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', 
  textAlign: 'center',
};

const textStyle = {
  fontSize: '24px', 
};

function Home() {
  return (
    <div style={centerStyle}>
      <p style={textStyle}>Secret, Secret, Secret!</p>
      <p style={textStyle}>Dig More, It's all here.</p>
    </div>
  );
}

export default Home;

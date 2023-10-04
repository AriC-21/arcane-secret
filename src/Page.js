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

function Page() {
  return (
    <div style={centerStyle}>
      <p style={textStyle}>Here is your desired Secret!</p>
      <p style={textStyle}>flag{CIC4D4_S3CR3T_0N_MY_W3BSIT3}</p>
    </div>
  );
}

export default Page;
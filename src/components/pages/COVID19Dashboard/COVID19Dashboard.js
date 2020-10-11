import React from 'react';
import Iframe from 'react-iframe'

function COVID19Dashboard() {
  return (
    <>
      <Iframe url="https://covid19.millenniumtech.net/"
        width="100%"
        height="1200px"
        id="myId"
        className="myClassname"
        display="initial"
        scrolling ="no"
        position="relative"/>
    </>
  );
}

export default COVID19Dashboard;

import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
      
         <p className="test" >@2023 PRIYANSHU</p>
          <p className="test">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap; 
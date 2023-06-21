import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <BsGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
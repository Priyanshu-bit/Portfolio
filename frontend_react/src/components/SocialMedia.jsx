import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Bla_ck_Scorpion" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://github.com/Priyanshu-bit" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/priyanshu-patel/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;

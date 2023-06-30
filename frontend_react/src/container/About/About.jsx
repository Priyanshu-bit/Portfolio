import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
    
      <h2 className="head-r"><span className='symbol'>~</span> A<span className='col'>B</span><span className='o'>O</span><span className='colorr'>U</span>T <span className='symbol'>~</span></h2><br/>
        <br></br>
        <br></br>
        <div className="about-box">
      <div className="box-heading">
      </div>
      <div className="box-content">
        <span className='alignn'>
        Passionate MERN Stack Developer with a strong foundation in modern web development technologies. I specialize in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With a deep understanding of front-end and back-end development, I excel at designing and implementing efficient, responsive, and user-friendly interfaces.
        </span>
      </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="rty" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
     
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
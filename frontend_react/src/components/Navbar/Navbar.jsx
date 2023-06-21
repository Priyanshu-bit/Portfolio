

// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import resumePdf from '../../assets/resume.pdf';
// import './Navbar.scss';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [resumeToggle, setResumeToggle] = useState(false);

//   const viewResumeHandler = () => {
//     window.open(resumePdf, '_blank');
//   };

//   const downloadResumeHandler = () => {
//     const link = document.createElement('a');
//     link.href = resumePdf;
//     link.download = 'resume.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const toggleResume = () => {
//     setResumeToggle(!resumeToggle);
//   };

//   const toggleNavbar = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt="logo" />
//       </div>
//       <ul className="app__navbar-links">
//         {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
//           <li className="app__flex p-text" key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//         <li className="app__flex p-text" key="link-resume">
//           <div />
//           <a href={`#resume`} onClick={toggleResume}>
//             Resume
//           </a>
//           {resumeToggle && (
//             <ul className="app__navbar-sublinks">
//               <li className="app__navbar-sublink" onClick={viewResumeHandler}>
//                 <a>View</a>
//               </li>
//               <li className="app__navbar-sublink" onClick={downloadResumeHandler}>
//                 <a>Download</a>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>

//       <div className="app__navbar-menu">
//         <HiMenuAlt4 onClick={toggleNavbar} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: 'easeOut' }}
//           >
//             <HiX onClick={toggleNavbar} />
//             <ul>
//               {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={toggleNavbar}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//               <li key="menu-resume" onClick={toggleResume}>
//                 <a>Resume</a>
//                 {resumeToggle && (
//                   <ul className="app__navbar-sublinks">
//                     <li className="app__navbar-sublink" onClick={viewResumeHandler}>
//                       <a>View</a>
//                     </li>
//                     <li className="app__navbar-sublink" onClick={downloadResumeHandler}>
//                       <a>Download</a>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import resumePdf from '../../assets/resume.pdf';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);

  const downloadResumeHandler = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'resume.pdf';
    link.click();
  };

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text" key="link-resume">
          <div />
          <a href="#resume" onClick={downloadResumeHandler}>
            Resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={toggleNavbar} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={toggleNavbar} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={toggleNavbar}>
                    {item}
                  </a>
                </li>
              ))}
              <li key="menu-resume">
                <a href="#resume" onClick={downloadResumeHandler}>
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react'

// import PropTypes from 'prop-types'

// import './card.css'

// const Card = (props) => {
//   return (
//     <div className={`card-card ${props.rootClassName} `}>
//       <div className="card-info">
//         <span className="card-text">{props.text}</span>
//         <span className="card-text1">{props.text1}</span>
//       </div>
//     </div>
//   )
// }

// // Card.defaultProps = {
// //   text1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.',
// //   rootClassName: '',
// //   text: 'Business',
// // }
// Card.defaultProps = {
//   text1: `Start, grow, and manage your business with confidence.\n
// Learn the latest industry trends and best practices.\n
// Get access to exclusive tools and resources to help you succeed.\n
// Connect with other entrepreneurs and business experts to get advice and support.`,
//   rootClassName: '',
//   text: 'Business',
// };

// Card.defaultProps = {
//   text1: `tart, grow, and manage your business with confidence.\n
// Learn the latest industry trends and best practices.\n
// Get access to exclusive tools and resources to help you succeed.\n
// Connect with other entrepreneurs and business experts to get advice and support.`,
//   rootClassName2: '',
//   text: 'Personal',
// };


// Card.propTypes = {
//   text1: PropTypes.string,
//   rootClassName: PropTypes.string,
//   text: PropTypes.string,
// }

// export default Card

import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
  let text1 = "";
  if (props.text === "Business") {
    text1 = `Start, grow, and manage your business with confidence.\n
Learn the latest industry trends and best practices.\n
Get access to exclusive tools and resources to help you succeed.\n
Connect with other entrepreneurs and business experts to get advice and support.`;
  } else if (props.text === "Personal") {
    text1 = `Find inspiration and resources to pursue your personal interests and hobbies.\n
    Discover tips and tricks to improve your mental and physical health Learn how to manage your finances and achieve your personal goals.\n
    Connect with a supportive community of like-minded individuals`;
  }
  
  return (
    <div className={`card-card ${props.rootClassName}`}>
      <div className="card-info">
        <span className="card-text">{props.text}</span>
        <span className="card-text1">{text1}</span>
      </div>
    </div>
  )
}

Card.defaultProps = {
  rootClassName: '',
  text: 'Business',
};

Card.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Card;

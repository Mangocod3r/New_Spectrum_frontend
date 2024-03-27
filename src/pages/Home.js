import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/card'
import './home.css'
import { motion } from 'framer-motion'

import { useState, useEffect, useRef } from 'react';

import Typed from 'typed.js';

const TypingText = (props) => {
  const elRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: props.words,
      typeSpeed: props.typingSpeed || 50,
      backSpeed: props.backSpeed || 30,
      startDelay: props.startDelay || 0,
      backDelay: props.backDelay || 500,
      loop: props.loop || false,
      loopCount: props.loopCount || Infinity,
      showCursor: props.showCursor || true,
      cursorChar: props.cursorChar || '|',
      contentType: props.contentType || 'html',
      onComplete: (self) => {
        props.onComplete && props.onComplete(self);
      }
    };

    const typed = new Typed(elRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [props]);

  return <span className='home-text10' ref={elRef} />;
}

const Home = (props) => {

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Is this a Free or Paid service?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Do you have any connections?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Do you have an iOS or Android app?",
      answer:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isOpen: false,
    },
  ]);

  const toggleAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  const showAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  const renderCard = (card, index) => {
    return (
      <div key={index} className="question">
        <div className="home-trigger" onClick={() => showAnswer(index)}>
          <span className="home-text40">{card.question}</span>
          <svg viewBox="0 0 1024 1024" className="home-icon2">
            <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
          </svg>
        </div>
        {card.isOpen && (
          <div className="question-content">
            <span className="home-text41">{card.answer}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div className="home-container" style={{ marginTop: '-20px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {}
      <title>Up Start Template</title>
      <meta property="og:title" content="Up Start Template" />
      {}
      {}
      {}
      {}
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <h1 className="home-title">
              <span>Empowering Students and Entrepreneurs to  </span>
              <br></br>
              {}
              {}
              <TypingText
                words={['Collaborate', 'Innovate', 'Succeed']}
                typingSpeed={50}
                startDelay={1000}
                backDelay={1000}
                loop={true}
                loopCount={Infinity}
              />
              <span> Together</span>

            </h1>
            <span className="home-description">
              Join our community of aspiring entrepreneurs and students to share and explore ideas, showcase your skills, and collaborate on groundbreaking projects that have the potential to change the world
            </span>
            <div className="home-container01">
              <Link style={{ textDecoration: 'none' }} to="/login" className="butto-out">Join for free</Link>
              <Link style={{ textDecoration: 'none' }} to="/login" className="butto-in">Log in</Link>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src='https://media.istockphoto.com/id/1349142218/photo/new-startup-launch-business-ideas-creativity.jpg?s=612x612&w=0&k=20&c=rmW-MQo3rV9xpFZHAC31c7S-do0w-F4Ab4BUQl8Vr40='

              className="home-hero-image"
            />
            {}
            <img
              alt="image"
              src="/playground_assets/group18-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/1287030300/photo/drop-shipping-business-owner-confirming-the-order-on-phone.jpg?s=612x612&w=0&k=20&c=XfaGtdTFUZofCWdOC70kiJ_DHls-a9VIdAwBdctBvoQ="            
              className="home-hero-image1"
            />
          </div>

          <motion.div className="home-content1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <span className="home-text11 beforeHeading">ENTREPRENUER</span>
            <h1 className="home-text12">

              {}
              {}
            </h1>
            <span className="home-text15">
              Are you looking for the next big thing? Our platform offers you a unique opportunity to discover innovative projects submitted by talented students. Upload your projects, connect with budding entrepreneurs and potentially invest in the next game-changing idea. Take the first step towards creating a successful future, today
            </span>
            <div className="home-container02">
              <button className="my-button  bb blue">
                Learn more
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      <motion.div className="home-section1 section-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2.5 }}
      >
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 beforeHeading">STUDENT</span>
            <h1 className="home-text17">
              {}
              {}
              {}
            </h1>
            <span className="home-text21">
              Unlock your potential and take the first step towards your entrepreneurial journey! Join our platform designed exclusively for students, where you can explore innovative projects, submit your ideas, and learn from experienced entrepreneurs. Collaborate with like-minded individuals, gain valuable insights and transform your ideas into reality!
            </span>
            <div className="home-container03">
              <button className="my-button bb blue">
                See how
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="

            className="home-hero-image2"
          />
          <div className="home-image4"></div>
        </div>
      </motion.div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="https://media.istockphoto.com/id/841390884/photo/door-opened-light.jpg?s=612x612&w=0&k=20&c=tmL9D6eo2yofXD7Pwcp2v73OFMBa4IsoyVTojt1dQTE="

              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            {}
            <h1 className="home-text23">Join today this innovation portal </h1>
            <div className="home-step">
              <div className="home-number">
                <span className="home-text24">1</span>
              </div>
              <div className="home-container04">
                <span className="home-title1">Create your free account</span>
                <span className="home-text25">
                  Step into the future of innovation with us by creating your free account today
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text26">2</span>
              </div>
              <div className="home-container05">
                <span className="home-title2">
                  Learn  &amp; upload by your field
                </span>
                <span className="home-text27">
                  Learn, upload, and collaborate with like-minded individuals in your field to turn your ideas into reality.

                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text28">3</span>
              </div>
              <div className="home-container06">
                <span className="home-title3">Fund ideas </span>
                <span className="home-text29">
                  Join the movement of funding groundbreaking projects that have the potential to change the world
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text30 beforeHeading">Join us now!</span>
          <h1 className="home-text31">
            {}
            <span>Take your skills to new heights with Akova's innovation community</span>
          </h1>

          <div className="home-cards-container">
            <Card rootClassName="card-root-class-name"></Card>
            <Card text="Personal" rootClassName="card-root-class-name2"></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width6 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text35 beforeHeading">faq</span>
              <h1 className="home-text36">
                <span className="home-text37">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text39">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger">
                  <span className="home-text40">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text41">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text42">
                    Do you have any connections?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon4">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text43">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text44">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text45">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/group2-1200w.png"
              className="home-image6"
            />
          </div>
          {}
          <div className="home-banner">
            <span className="home-text46 beforeHeading3">get started</span>
            <h1 className="home-text47">
              <span>Push your minds to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="home-text53">
              <span>
                Unleash your potential and turn your ideas into reality with Akova  <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                the ultimate innovation hub for students and entrepreneurs                               <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            {}
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container07">
            <div className="footer-column">
              <span className="home-text57">Product</span>
              <span className="home-text58">How it works</span>
              <span className="home-text59">Features</span>
              <span className="home-text60">Pricing</span>
              <span className="home-text61">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text63">App</span>
              <span className="home-text64">Download iOS app</span>
              <span className="home-text65">Download Android app</span>
              <span className="home-text66">Log in to Portal</span>
              <span className="home-text67">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text69">Company</span>
              <span className="home-text70">About us</span>
              <span className="home-text71">Culture</span>
              <span className="home-text72">Code of conduct</span>
              <span className="home-text73">Careers</span>
              <span className="home-text74">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text76">Invest</span>
              <span className="home-text77">Commodity</span>
              <span className="home-text78">Savings</span>
              <span className="home-text79">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text82">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text85">Security</span>
              <span className="home-text86">Security status</span>
              <span className="home-text87">ISO</span>
              <span className="home-text88">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text90">Follow</span>
              <span className="home-text91">Instagram</span>
              <span className="home-text92">Twitter</span>
              <span className="home-text93">Facebook</span>
              <span className="home-text94">Tik Tok</span>
              <span className="home-text95">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Home
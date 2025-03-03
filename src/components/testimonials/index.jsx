import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ReactModal from 'react-modal';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose';

// Set your app element for accessibility
ReactModal.setAppElement('#root');

const TestimonialCard = ({ testimonial }) => {
  const textRef = useRef(null);
  const [showReadMore, setShowReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (textRef.current) {
    const naturalHeight = textRef.current.scrollHeight;
    if (naturalHeight > 300) {
      setShowReadMore(true);
    }
  }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="testimonial">
      <h3 className="name">{testimonial.name}</h3>
      <div className="job">{testimonial.job}</div>
      <div
        className="text-container"
        ref={textRef}
        // If the text is long, restrict the visible height
        style={showReadMore ? { maxHeight: '200px', overflow: 'hidden' } : {}}
      >
        <p className="text">{testimonial.text}</p>
      </div>
      {showReadMore && (
        <button onClick={openModal} className="read-more-btn">
          Read More
        </button>
      )}

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Full Testimonial"
        className="testimonial-modal"
        overlayClassName="modal-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">
          <FontAwesomeIcon icon={faClose} size='x1'/>
        </button>
        <div className="testimonial">
          <h3 className="name">{testimonial.name}</h3>
          <div className="job">{testimonial.job}</div>
          <p className="text">{testimonial.text}</p>
        </div>
        
      </ReactModal>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Govane Lohbauer',
      job: 'Costume Director at Shakespeare and Company',
      text: '"I just wanted you to know how impressed I was – it is just excellent. Character work and color use is excellent. I also love the use of texture and your hats are just wonderful." (re Sophiatown)',
    },
    {
      name: 'Ninya Mikhaila',
      job: 'The Tudor Tailor',
      text: '"Emma is a very able and capable maker who is a delight to have in the workplace due to her positive attitude and relaxed sociable nature. I would recommend her as an asset to any workroom or costume shop."',
    },
    {
      name: 'Christina Beam',
      job: 'Costume Designer',
      text: '"Emma is an absolute joy to work with. She is proactive, intelligent, organized, skillful, detail-oriented and professional. She commands the respect of her team while still creating an enjoyable, pleasant work environment. She had her work cut out for her with a cast of thirty undergraduate actors and she more than rose to the challenge. I never had to worry about whether or not my actors would be dressed the way they were supposed to be dressed down to the most minute detail and I knew that if there was ever a problem she was more than capable of devising a solution. I had complete trust in her to maintain the integrity of my design and that is a true gift as a costume designer who is both a perfectionist and emotionally tied to their work, to feel like the design is safe and well cared for."',
    },
    {
      name: 'Kate Unwin',
      job: 'Costume Designer',
      text: '"Emma came to help me for a day on a project where I was in need of an extra pair of hands to sew and make costumes. She was extremely efficient, worked well, worked quickly and demonstrated a lot of patience and skill. She was also fun and lively to have around. I would definitely work with her again and can\'t recommend her highly enough."',
    },
    {
      name: 'Lowell Walker',
      job: 'Writer and Director',
      text: '"Emma creates beautiful, attentive and thoughtful designs, filled with detail and care. She works well with a team, is a joyous presence to have around, is funny, fun, hardworking and focused. In general, she came to every shoot with lots of ideas for design, but also an openness to accepting and using the limitations and/or opportunities of each individual space. She is creative and present on the day, as well as decisive and considered in each moment. She is open to feedback and giving feedback. She takes care not just in the specificity of her arena, but also its contribution to the whole. Emma is all round an excellent collaborator. I couldn\'t really have asked for more."',
    },
    {
      name: 'Jamie Fraser',
      job: 'Writer and Director',
      text: '"I have had the pleasure of working with Emma on both theatrical and film projects, the most recent of which was a short film which called Voice. This was an intense shoot featuring many locations and Emma\'s excellent, clarifying sense of design and utter commitment to her work was an essential component to the project\'s success. Besides bringing technical expertise to her roles in production and art design, Emma is a wonderful person to collaborate with: inventive with a limited budget, willing to pitch in wherever she is needed and indefatigably enthusiastic and upbeat. I would work with her again in a heartbeat."',
    },
    {
      name: 'David Brady',
      job: 'Artistic Director of Proforça Theatre Company and The Lion and Unicorn Theatre, London',
      text: '"Emma was the Production Designer for Proforça\'s first production "If I Go" - she came to our project with enthusiasm and some great ideas, and was able to help us realise our vision for the production. In addition to her design work, she was also able to provide some really helpful production assistance prior to the show, and this was very much appreciated."',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <div className="subtitle" style={{ color: 'var(--secondary)' }}>
        what they say
      </div>
      <h2>testimonials</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </Slider>
 
    </div>
  );
};

export default Testimonials;



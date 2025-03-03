import React from 'react';
import bodice from '../../../assets/images/bodice.webp';
import card1back from '../../../assets/images/bodice1.webp';
import Button from '../../button';
import './index.scss';


const FeaturedWork = () => {
  return (
    <div className='card-container'>
          <div className="flip-card">
              <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <img
                          src={bodice}
                          alt="Custom bodice for magic at the musicals"
                          loading='lazy'
                          className='card-image'
                      />
                      <div className="front-title">
                           <h2 className="name">Magic at the Musicals</h2>
                      </div>
                  </div>
                  <div className="flip-card-back">
                      <img
                          src={card1back}
                          alt="Custom Bodice for Magic at the Musicals"
                          loading='lazy'
                          className='card-back-image'
                      />
                      <h2 className="name">Magic at the Musicals</h2>
                      <p className='desc subtitle'>Designer and Maker</p>
                      <div className="btn-container">
                        <Button
                        text='View'
                        link='/'
                        background='var(--secondary)'
                        />
                      </div>
                  </div>
              </div>
          </div>
          <div className="flip-card">
              <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <img
                          src={bodice}
                          alt="Custom bodice for magic at the musicals"
                          loading='lazy'
                          className='card-image'
                      />
                      <h2 className="name">Magic at the Musicals</h2>
                  </div>
                  <div className="flip-card-back">
                      <img
                          src={card1back}
                          alt="Custom Bodice for Magic at the Musicals"
                          loading='lazy'
                          className='card-back-image'
                      />
                      <h2 className="name">Magic at the Musicals</h2>
                      <p className='desc subtitle'>Designer and Maker</p>
                       <div className="btn-container">
                        <Button
                        text='View'
                        link='/'
                        background='var(--secondary)'
                        />
                      </div>
                  </div>
              </div>
          </div>
          <div className="flip-card">
              <div className="flip-card-inner">
                  <div className="flip-card-front">
                      <img
                          src={bodice}
                          alt="Custom bodice for magic at the musicals"
                          loading='lazy'
                          className='card-image'
                      />
                      <h2 className="name">Magic at the Musicals</h2>
                  </div>
                  <div className="flip-card-back">
                      <img
                          src={card1back}
                          alt="Custom Bodice for Magic at the Musicals"
                          loading='lazy'
                          className='card-back-image'
                      />
                      <h2 className="name">Magic at the Musicals</h2>
                      <p className='desc subtitle'>Designer and Maker</p>
                       <div className="btn-container">
                        <Button
                        text='View'
                        link='/'
                        background='var(--secondary)'
                        />
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default FeaturedWork

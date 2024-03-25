import React, { useState } from 'react';

const SuccessAlert = ({textMessage}) => {
  return (
    <div className="success alert">
      <div className="content">
        <div className="icon">
          <svg width="50" height="50" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <circle fill="#fff" cx="64" cy="64" r="64"/>
            <path fill="#3EBD61" d="M54.3,97.2L24.8,67.7c-0.4-0.4-0.4-1,0-1.4l8.5-8.5c0.4-0.4,1-0.4,1.4,0L55,78.1l38.2-38.2c0.4-0.4,1-0.4,1.4,0l8.5,8.5c0.4,0.4,0.4,1,0,1.4L55.7,97.2C55.3,97.6,54.7,97.6,54.3,97.2z"/>
          </svg>
        </div>
        <p>{ textMessage }</p>
      </div>
      <button className="close">
        <svg height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
        </svg>
      </button>
    </div>
  );
};

const InfoAlert = ({textMessage}) => {
  return (
    <div className="info alert">
      <div className="content">
        <div className="icon">
          <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="white"/>
            <path d="M27 22H23V40H27V22Z" fill="#006CE3"/>
            <path d="M25 18C24.2089 18 23.4355 17.7654 22.7777 17.3259C22.1199 16.8864 21.6072 16.2616 21.3045 15.5307C21.0017 14.7998 20.9225 13.9956 21.0769 13.2196C21.2312 12.4437 21.6122 11.731 22.1716 11.1716C22.731 10.6122 23.4437 10.2312 24.2196 10.0769C24.9956 9.92252 25.7998 10.0017 26.5307 10.3045C27.2616 10.6072 27.8864 11.1199 28.3259 11.7777C28.7654 12.4355 29 13.2089 29 14C29 15.0609 28.5786 16.0783 27.8284 16.8284C27.0783 17.5786 26.0609 18 25 18V18Z" fill="#006CE3"/>
          </svg>
        </div>
        <p>{ textMessage }</p>
      </div>
      <button className="close">
        <svg height="18px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
        </svg>
      </button>
    </div>
  );
};

function WarningAlert({textMessage}) {
    return (
      <div className="warning alert">
        <div className="content">
          <div className="icon">
            <svg height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"/>
            </svg>
          </div>
          <p>{ textMessage }</p>
        </div>
        <button className="close">
          <svg height="18px" style={{ enableBackground: 'new 0 0 512 512' }} version="1.1" viewBox="0 0 512 512" width="18px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
          </svg>
        </button>
      </div>
    );
  }

  const DangerAlert = ({textMessage}) => {
    return (
        <div className="danger alert">
            <div className="content">
                <div className="icon">
                    <svg height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fff" d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z"/>
                    </svg>
                </div>
                <p>{ textMessage }</p>
            </div>
            <button className="close">
                <svg height="18px" viewBox="0 0 512 512" width="18px" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#69727D" d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            </button>
        </div>
    );
}
const AlertContainer = (message) => {
    const textMessage = message.message.textMessage
    return (
        <div className="container m-auto  mt-2 left-2/4 xl:w-2/4 fixed top-0 z-50 -translate-x-2/4">
            {message.message.alertType === "success" ?
                <SuccessAlert textMessage={textMessage} />
                : message.message.alertType === 'error' ?
                    <DangerAlert textMessage={ textMessage } />
                    : message.message.alertType === 'info' ?
                        <InfoAlert textMessage={ textMessage } />
                        : message.message.alertType === "warning" ?
                            <WarningAlert textMessage={ textMessage } />
                            : ''}
        </div>
    );
}
  
  export default AlertContainer;

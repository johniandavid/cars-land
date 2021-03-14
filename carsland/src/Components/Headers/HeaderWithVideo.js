import React, { useEffect } from 'react';
import './HeaderWithVideo.css'

import Video from "../../assets/media/landing-page-video.mp4"

// reactstrap Components
import { Button, Container } from "reactstrap";
import Typist from "react-typist";

// core Components

function HeaderWithVideo(props) {

    let pageHeader = React.createRef();

    let cursor = {
        blink: true
    }

    function moveDown() {
        props.fullpage.moveSectionDown()
    }

    function moveTo(section) {
        props.fullpage.moveTo(section)
    }

  useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <video
              data-autoplay
              data-keepplaying
              preload={'auto'}
              loop
              muted
              id="video"
          >
              <source data-src={Video} type="video/mp4"/>
          </video>
            <div className="motto text-center">
                <Typist className='h1' avgTypingDelay={100} cursor={cursor}> Buy Used Save More.</Typist>
                <h4>Order Online for Touchless Delivery</h4>
                <br />
                <Button className="btn-round" color="neutral" onClick={() => moveTo(3)} type="button" outline>
                    Shop
                </Button>
                <div className="moveSectionDownButton hoverButtonStyle">
                    <i className="nc-icon x2 nc-minimal-down " onClick={moveDown} />
                </div>
            </div>
        </Container>
      </div>
    </>
  );
}

export default HeaderWithVideo;

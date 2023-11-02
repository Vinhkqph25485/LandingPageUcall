import './VideoScreenshot.css';
import layer1 from './Layer 1.png';
import right_arrow from './right_arrow.svg';
import left_arrow from './left_arrow.png';
import { Carousel } from 'antd';
import { useEffect, useRef, useState } from 'react';

interface VideoData {
  src: string;
}

const VideoScreenshot: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setSlidesToShow(1);
        setShowArrows(false);
      } else if (screenWidth <= 768) {
        setSlidesToShow(2);
        setShowArrows(true);
      } else {
        setSlidesToShow(4);
        setShowArrows(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dataVideo: VideoData[] = [
    { src: 'https://www.youtube.com/embed/BYJM-LgJDV0' },
    { src: 'https://www.youtube.com/embed/sSV2in79XhI?si=2SGVSsoww-ASRs2W' },
    { src: 'https://www.youtube.com/embed/sWDhEBI3qr8?si=cK6Trw8a1edBr-n9' },
    { src: 'https://www.youtube.com/embed/xocZlRFw4AQ?si=ekiQx0MCc1cL7jNa' },
    { src: 'https://www.youtube.com/embed/CmXd1DfwGrI?si=8Z8TRwsY_KYCiAhg' },
    { src: 'https://www.youtube.com/embed/-oBIP3rIxA4' },
  ];

  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className="w-[1200px] flex flex-col items-center justify-center mx-auto">
      <div style={{ height: 'auto', width: '1200px', maxWidth: '100%' }}>
        <div className="button-container">
          <button onClick={handlePrev} className="prev-button">
            <img src={left_arrow} alt="" width={32} className="me-5" />
          </button>
          <button onClick={handleNext} className="next-button">
            <img src={right_arrow} alt="" width={32} className="ms-5" />
          </button>
          <Carousel
            ref={carouselRef}
            className="mx-1"
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            arrows={showArrows}
            style={{ height: 'auto', width: '100%', maxWidth: '100%' }}
          >
            {dataVideo.map((item, index) => (
              <div key={index} className="p-4">
                <img className="image" src={layer1} width="260" alt="" />
                <iframe
                  className="video"
                  width="248"
                  height="515"
                  src={item.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default VideoScreenshot;

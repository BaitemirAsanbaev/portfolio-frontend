import React from "react";
import "./Slider.css"; // Import CSS for styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CertificatesSlider = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay:true,
    autoplaySpeed:0,
    cssEase:'linear',
    speed: 5000,
    arrows:false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index}
            className="certificate"
            >
              <div
              className="cert"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",  
                }}
              >
                
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CertificatesSlider;

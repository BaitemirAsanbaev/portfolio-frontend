import React from "react";
import "./Slider.css"; // Import CSS for styling
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { api } from "../../api";

const SliderComp = ({ posts }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerOpacity:'.6',
    slidesToShow: 1,
    autoplay:true,
    autoplaySpeed:0,
    cssEase:'linear',
    speed: 5000,
    arrows:false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {posts.map((post, index) => {
          const imageUrl = `${api}/${post.image}`;
          return (
            <div key={index}
            className="slide"
            >
              <div
              className="image_div"
                style={{
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",  
                }}
              >
                
              </div>
              <div className="text_div">

                {post.text}
                </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComp;

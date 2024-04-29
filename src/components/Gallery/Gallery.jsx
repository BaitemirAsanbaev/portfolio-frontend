import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { getPosts } from "../../services/GalleryService";
import "./Gallery.scss";
import { api } from "../../api";

export default function Gallery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await getPosts();
        setPosts(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      effect={"coverflow"}
      autoplay={{ delay: 5 }}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {posts.map((post, index) => (
        <SwiperSlide key={index} className="slide-item">
          <img
            className="gallery-image"
            src={api + "/" + post.image}
            alt={post.text}
          />
          <span className="gallery-text">{post.text}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

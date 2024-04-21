import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import Swiper's coverflow effect style
import { getPosts } from '../../services/GalleryService';
import { decode } from '../../helpers/base64decoder';
import './Gallery.scss'; // Import your custom CSS for styling

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
      effect={'coverflow'} 
      autoplay={{delay:30}}
      coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }} // Customize coverflow effect
    >
      {posts.map((post, index) => (
        <SwiperSlide key={index}>
          <img className="gallery-image" src={decode(post.image)} alt={post.text}/>
          <span className='gallery-text'>{post.text}</span>
        </SwiperSlide>
      ))} 
    </Swiper>
  );
}

import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/GalleryService";
import "./Gallery.scss";
import SliderComp from "../Slider/Slider";

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
    <div className="Gallery">
      <SliderComp posts={posts}/>
    </div>
  );
}

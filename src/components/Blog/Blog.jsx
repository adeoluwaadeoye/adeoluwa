import React from "react";
import "../Blog/Blog.css";
import "../Blog/blogs.css";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <h5>Crafting Digital Narratives Through Blogs</h5>
        <h2>My Blog</h2>

        <div className="content grid container blog__container">
          {BlogApi.map((value, index) => {
            return (
              <Card
                key={index}
                image={value.image}
                date={value.date}
                title_one={value.title_one}
                desc_one={value.desc_one}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;

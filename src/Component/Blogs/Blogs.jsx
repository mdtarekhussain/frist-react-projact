import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handlePrice, handleRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []); // Runs once on component mount

  return (
    <div className="md:w-2/3  ">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1  sm:px-[30px] px-4  gap-3 ">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleBookmark={handleBookmark}
            handlePrice={handlePrice}
            handleRead={handleRead}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handlePrice: PropTypes.func.isRequired,
  handleRead: PropTypes.func.isRequired,
};
export default Blogs;

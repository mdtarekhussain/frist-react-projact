import PropTypes from "prop-types";
import { MdOutlineBookmarks } from "react-icons/md";
const Blog = ({ blog, handleBookmark, handlePrice, handleRead }) => {
  const { title, cover, name, price, reding } = blog;
  return (
    <div className=" border-blue-300 border-2 p-2 rounded-[10px] text-center">
      <img className="rounded-[15px] h-[150px] w-full" src={cover} alt="" />
      <h2 className="mt-[4px] text-[16px] font-[500] ">{name}</h2>
      <h2 className="text-[14px] mt-[4px] font-[400]">Title : {title}</h2>
      <div className="flex gap-[10px] mt-[6px]  text-center">
        <p className="text-[17px] font-[500]">$ Price : {price} </p>
        <button onClick={() => handleBookmark(blog, reding)} className="">
          <MdOutlineBookmarks />
        </button>

        <button
          onClick={() => handleRead(reding)}
          className="text-[17px] font-[500]"
        >
          Credit : {reding} hr
        </button>
      </div>
      <button
        onClick={() => handlePrice(price)}
        className="bg-[#2F80ED] rounded-lg border-1px-solid-[#2F80ED] px-10 py-2 mt-2 text-white"
      >
        Select
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  handlePrice: PropTypes.func.isRequired,
  handleRead: PropTypes.func.isRequired,
};
export default Blog;

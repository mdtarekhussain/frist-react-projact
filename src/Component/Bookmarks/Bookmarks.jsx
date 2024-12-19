import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, prices, reding1 }) => {
  console.log(bookmarks, prices);

  return (
    <div className="sm:p-5 p-2  sm:mt-2 lg:mt-0  ">
      <div className="border-black-300 border-2  px-6 py-4 rounded-[10px] lg:w-full bg-gray-300">
        <h2 className="sm:text-[30px] lg:text-[25px] ">
          Credit Hour Remaining:
          <span className="text-pink-600 text-[30px]">{reding1}</span> hr
        </h2>
      </div>
      <h1 className="text-[30px] mt-1"> Course Name:</h1>
      <div className=" border-b-2 py-[44px]">
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={bookmark.id} idx={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>

      <div className="mt-0">
        <h2 className=" border-b-2  mt-[6px] py-1 ">
          Total Credit Hour : {reding1}
        </h2>
        <h2 className="mt-[6px] text-[30px]">Price : ${prices} </h2>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  prices: PropTypes.number.isRequired,
  reding1: PropTypes.number.isRequired,
};
export default Bookmarks;

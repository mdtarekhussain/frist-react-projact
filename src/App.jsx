import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmarks/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleBookmark = (book) => {
    const newBookmarks = [...bookmarks, book];
    setBookmark(newBookmarks);
  };
  const [prices, setPrice] = useState(0);
  const handlePrice = (price) => {
    const newPrice = prices + price;
    setPrice(newPrice);
  };
  const [reding1, setReding] = useState(0);
  const handleRead = (reding) => {
    const newRead = reding1 + reding;
    setReding(newRead);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <div className=" md:flex  mt-3 gap-4">
          <Blogs
            handleBookmark={handleBookmark}
            handlePrice={handlePrice}
            handleRead={handleRead}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            prices={prices}
            reding1={parseInt(reding1)}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;

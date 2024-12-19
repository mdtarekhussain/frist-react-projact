import PropTypes from "prop-types";
const Bookmark = ({ bookmark, idx }) => {
  const { name } = bookmark;

  return (
    <div>
      <h3 className="text-[17px]">
        {idx + 1} {name}
      </h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.shape({
    name: PropTypes.string.isRequired, // Ensure 'name' is a required string
  }).isRequired,
  idx: PropTypes.number.isRequired,
};
export default Bookmark;

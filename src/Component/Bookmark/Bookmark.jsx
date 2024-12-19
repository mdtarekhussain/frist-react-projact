import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  const { name } = bookmark;
  return (
    <div>
      <h3 className="text-[17px]">{name}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.shape({
    name: PropTypes.string.isRequired, // Ensure 'name' is a required string
  }).isRequired,
};
export default Bookmark;
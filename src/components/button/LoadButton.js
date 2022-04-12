import PropTypes from 'prop-types';
const LoadButton = ({ LoadMore, loadingText, isLoading }) => {
  function handleClick(event) {
    LoadMore(event.target.name);
  }
  return (
    <button
      onClick={handleClick}
      className={`${
        isLoading ? 'explorer__load__button__loading' : 'explorer__load__button'
      } px-1`}>
      {loadingText}
    </button>
  );
};

export default LoadButton;

LoadButton.propTypes = {
  isLoading: PropTypes.bool,
  LoadMore: PropTypes.func,
  loadingText: PropTypes.string
};

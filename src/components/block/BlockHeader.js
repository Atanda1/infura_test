import PropTypes from 'prop-types';
import moment from 'moment';
const BlockHeader = ({ block }) => {
  const convertTimestamp = (time) => {
    var date = new Date(time * 1000);
    return moment(date).fromNow();
  };

  const convertNumber = (number) => {
    return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div className="explorer__blocks__wrapper__item__header">
      <div className="explorer__blocks__wrapper__item__header__left">
        <h3 className="explorer__blocks__wrapper__item__header__left__number">
          {convertNumber(block.number)}
        </h3>
        <h5 className="explorer__blocks__wrapper__item__header__left__time">
          {convertTimestamp(block.timestamp)}
        </h5>
      </div>

      <h3 className="explorer__blocks__wrapper__item__header__transactions">
        {block.transactions.length} TXs
      </h3>
    </div>
  );
};

export default BlockHeader;

BlockHeader.propTypes = {
  block: PropTypes.object
};

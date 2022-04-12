import nextIcon from '../../assets/images/next.svg';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
const BlockFooter = ({ block }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (block.transactions.length > 100) {
      setShow(true);
    } else setShow(false);
  });
  const CalculateBlocksLeft = (number) => {
    return number - 100;
  };

  return (
    <>
      {show ? (
        <div className="explorer__blocks__wrapper__item__footer">
          <h3 className="explorer__blocks__wrapper__item__footer__text">
            {CalculateBlocksLeft(block.transactions.length)} MORE TX
          </h3>
          <div className="explorer__blocks__wrapper__item__footer__next">
            <img src={nextIcon} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default BlockFooter;

BlockFooter.propTypes = {
  block: PropTypes.object
};

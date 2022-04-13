import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../tooltip/tooltip';

const BlockCount = ({ block }) => {
  const [isShown, setIsShown] = useState(false);
  const currentTransaction = useRef('');

  const Count = (transactions) => {
    if (transactions.length > 100) {
      return transactions.slice(0, 100);
    } else if (transactions.length <= 100) return transactions;
  };

  const CountColor = (number) => {
    let result;
    switch (number) {
      case 1:
      case 2:
      case 7:
      case 13:
      case 18:
      case 25:
      case 29:
      case 46:
      case 49:
      case 54:
      case 58:
      case 62:
      case 65:
      case 73:
      case 66:
      case 79:
      case 84:
      case 85:
        result = true;
        break;
      default:
        result = false;
    }

    return result;
  };

  const displayTransactions = async (transactionHash) => {
    setIsShown(true);
    currentTransaction.current = transactionHash;
  };

  return (
    <div className="explorer__blocks__wrapper__item__count">
      <>
        {Count(block.transactions).map((transaction, index) => (
          <div
            data-tip
            data-for="transaction"
            key={index}
            onMouseEnter={() => displayTransactions(transaction)}
            onMouseLeave={() => setIsShown(false)}>
            <div
              className={`${
                CountColor(index + 1)
                  ? 'explorer__blocks__wrapper__item__count__block__coloured'
                  : 'explorer__blocks__wrapper__item__count__block'
              } `}></div>
          </div>
        ))}
        {isShown && currentTransaction.current && (
          <div>
            <Tooltip transactionHash={currentTransaction.current} />
          </div>
        )}
      </>
    </div>
  );
};

export default BlockCount;

BlockCount.propTypes = {
  block: PropTypes.object
};

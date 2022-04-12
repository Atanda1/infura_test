import { useState, useRef } from 'react';
import Web3 from 'web3';
import PropTypes from 'prop-types';
import Tooltip from '../tooltip/tooltip';

const BlockCount = ({ block }) => {
  const [isShown, setIsShown] = useState(false);
  const currentTransaction = useRef(null);
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
    const provider = process.env.REACT_APP_PROVIDER;
    const web3Provider = new Web3.providers.HttpProvider(provider);
    const web3 = new Web3(web3Provider);
    let transaction = await web3.eth.getTransaction(transactionHash);
    currentTransaction.current = transaction;
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
          <Tooltip transaction={currentTransaction.current} />
        )}
      </>
    </div>
  );
};

export default BlockCount;

BlockCount.propTypes = {
  block: PropTypes.object
};

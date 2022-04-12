import { useState } from 'react';
import Web3 from 'web3';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
const BlockCount = ({ block }) => {
  const [isShown, setIsShown] = useState(false);
  const [currentTransaction, setTransaction] = useState({});
  const Count = (number) => {
    if (number > 100) {
      return 100;
    } else return number;
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
    console.log(transactionHash);
    const provider = process.env.REACT_APP_PROVIDER;
    const web3Provider = new Web3.providers.HttpProvider(provider);
    const web3 = new Web3(web3Provider);
    let transaction = await web3.eth.getTransaction(transactionHash);
    let transactionReceipt = await web3.eth.getTransactionReceipt(transactionHash);
    transaction = Object.assign(transaction, transactionReceipt);
    console.log('Transaction: ', transaction);
    await setTransaction(currentTransaction);
  };

  return (
    <div className="explorer__blocks__wrapper__item__count">
      <>
        {[...Array(Count(block.transactions.length))].map((x, i) => (
          <div
            data-tip
            data-for="transaction"
            key={i}
            onMouseEnter={() => displayTransactions(block.transactions[i])}
            onMouseLeave={() => setIsShown(false)}>
            <div
              className={`${
                CountColor(i)
                  ? 'explorer__blocks__wrapper__item__count__block__coloured'
                  : 'explorer__blocks__wrapper__item__count__block'
              } `}>
              {/* {i + 1} */}
            </div>
          </div>
        ))}
        {isShown && (
          <ReactTooltip
            className="transaction__tooltip"
            backgroundColor="#ffff"
            id="transaction"
            place="right"
            effect="solid">
            <div className="transaction__tooltip__location">
              <div className="transaction__tooltip__location__sender">
                <h3 className="transaction__tooltip__location__sender__title">FROM</h3>
                <h3 className="transaction__tooltip__location__sender__address">8930...0x323</h3>
              </div>
              <div className="transaction__tooltip__location__receiver">
                <h3 className="transaction__tooltip__location__receiver__title">TO</h3>
                <h3 className="transaction__tooltip__location__receiver__address">8930...0x323</h3>
              </div>
            </div>
            <div className="transaction__tooltip__value">
              <div className="transaction__tooltip__value__transaction">
                <h3 className="transaction__tooltip__value__transaction__title">VALUE</h3>
                <h3 className="transaction__tooltip__value__transaction__amount">500 ETH</h3>
              </div>
              <div className="transaction__tooltip__value__cash">
                <h3>$1452</h3>
                <span>@</span>
                <h3>$90.10</h3>
              </div>
            </div>
          </ReactTooltip>
        )}
      </>
    </div>
  );
};

export default BlockCount;

BlockCount.propTypes = {
  block: PropTypes.object
};

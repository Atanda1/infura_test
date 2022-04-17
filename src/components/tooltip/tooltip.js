import Web3 from 'web3';
import { web3 } from '../../web3/index';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';

const Tooltip = ({ transactionHash }) => {
  const [newTransaction, setTransaction] = useState({});
  useEffect(() => {
    async function first() {
      let transaction = await web3.eth.getTransaction(transactionHash);
      setTransaction(transaction);
    }
    first();
  }, [transactionHash]);

  const getTransactionValue = (transaction) => {
    if (transaction) {
      const etherValue = Web3.utils.fromWei(transaction.value, 'ether');
      return etherValue;
    }
  };
  return (
    <ReactTooltip
      className="transaction__tooltip"
      backgroundColor="#ffff"
      id="transaction"
      place="right"
      effect="solid">
      <div className="transaction__tooltip__location">
        <div className="transaction__tooltip__location__sender">
          <h3 className="transaction__tooltip__location__sender__title">FROM</h3>

          <div className="transaction__tooltip__location__sender__address">
            {newTransaction.from ? (
              `${newTransaction.from.slice(0, 4) + '...' + newTransaction.from.slice(-4)}`
            ) : (
              <h3>Loading</h3>
            )}
          </div>
        </div>
        <div className="transaction__tooltip__location__receiver">
          <h3 classame="transaction__tooltip__location__receiver__title">TO</h3>

          <div className="transaction__tooltip__location__receiver__address">
            {newTransaction.to ? (
              `${newTransaction.to.slice(0, 4) + '...' + newTransaction.to.slice(-4)}`
            ) : (
              <h3>Loading</h3>
            )}
          </div>
        </div>
      </div>

      <div className="transaction__tooltip__value">
        <div className="transaction__tooltip__value__transaction">
          <h3 className="transaction__tooltip__value__transaction__title">VALUE</h3>

          <div className="transaction__tooltip__value__transaction__amount">
            {newTransaction.value ? `${getTransactionValue(newTransaction)}` : <h3>Loading</h3>}
          </div>
        </div>

        <div className="transaction__tooltip__value__cash">
          <h3>$1452</h3>
          <span>@</span>
          <h3>$90.10</h3>
        </div>
      </div>
    </ReactTooltip>
  );
};

export default Tooltip;

Tooltip.propTypes = {
  transactionHash: PropTypes.string
};

import Web3 from 'web3';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ transaction }) => {
  const getTransactionValue = (info) => {
    if (info) {
      const etherValue = Web3.utils.fromWei(info.value, 'ether');
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
            {transaction ? (
              `${transaction.from.slice(0, 4) + '...' + transaction.from.slice(-4)}`
            ) : (
              <h3>Loading</h3>
            )}
          </div>
        </div>
        <div className="transaction__tooltip__location__receiver">
          <h3 classame="transaction__tooltip__location__receiver__title">TO</h3>
          <div className="transaction__tooltip__location__receiver__address">
            {transaction ? (
              `${transaction.to.slice(0, 4) + '...' + transaction.to.slice(-4)}`
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
            {getTransactionValue(transaction)}ETH
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
  transaction: PropTypes.object
};

import PropTypes from 'prop-types';
//import { useEffect } from 'react';

const ExplorerHeader = ({ blockData, isLoading }) => {
  const getBlockData = (blockData, info) => {
    let data;
    if (blockData.length > 0) {
      switch (info) {
        case 'number':
          data = `${blockData[0].number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          break;
        case 'gas':
          data = `${(blockData[0].baseFeePerGas / 1000000000).toFixed(2)}`;
          break;
        case 'size':
          data = `${blockData[0].size}`;
          break;
        case 'full':
          data = `${((blockData[0].gasUsed / blockData[0].gasLimit) * 100).toFixed(2)}`;
          break;
        default:
          data = '';
      }
      return data;
    }
  };
  return (
    <header className="explorer__header">
      <div className="explorer__header__info">
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">CURRENT BLOCK</h3>
          <div className="explorer__header__info__option__number">
            <span>
              {isLoading !== true && blockData ? (
                <h1>{getBlockData(blockData, 'number')}</h1>
              ) : (
                <div className="placeholder__option"></div>
              )}
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE GAS PRICE</h3>
          <div className="explorer__header__info__option__number">
            <span>
              {isLoading !== true && blockData ? (
                <span>
                  <h1>{getBlockData(blockData, 'gas')}</h1>gwei
                </span>
              ) : (
                <div className="placeholder__option"></div>
              )}
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE BLOCK SIZE</h3>
          <div className="explorer__header__info__option__number">
            <span>
              {isLoading !== true && blockData ? (
                <span>
                  <h1>{getBlockData(blockData, 'size')}</h1>mgas
                </span>
              ) : (
                <div className="placeholder__option"></div>
              )}
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE BLOCK FULLNESS</h3>
          <div className="explorer__header__info__option__number">
            <span>
              {isLoading !== true && blockData ? (
                <span>
                  <h1>{getBlockData(blockData, 'full')}%</h1>
                </span>
              ) : (
                <div className="placeholder__option"></div>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ExplorerHeader;

ExplorerHeader.propTypes = {
  blockData: PropTypes.array,
  isLoading: PropTypes.bool
};

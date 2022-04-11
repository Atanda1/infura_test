const ExplorerHeader = () => {
  return (
    <header className="explorer__header">
      <div className="explorer__header__info">
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">CURRENT BLOCK</h3>
          <div className="explorer__header__info__option__number">
            <span>
              <h1>8,243,123</h1>
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE GAS PRICE</h3>
          <div className="explorer__header__info__option__number">
            <span>
              <h1>87</h1>gwei
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE BLOCK PRICE</h3>
          <div className="explorer__header__info__option__number">
            <span>
              <h1>8.2</h1>mgas
            </span>
          </div>
        </div>
        <div className="explorer__header__info__option">
          <h3 className="explorer__header__info__option__text">AVERAGE BLOCK FULLNESS</h3>
          <div className="explorer__header__info__option__number">
            <span>
              <h1>88%</h1>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ExplorerHeader;

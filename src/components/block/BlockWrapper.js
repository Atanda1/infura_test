import nextIcon from '../../assets/images/next.svg';
const BlockWrapper = () => {
  return (
    <div className="explorer__blocks__wrapper">
      {[...Array(10)].map((x, i) => (
        <div className="explorer__blocks__wrapper__item" key={i + 1}>
          <div className="explorer__blocks__wrapper__item__header">
            <div className="explorer__blocks__wrapper__item__header__left">
              <h3 className="explorer__blocks__wrapper__item__header__left__number">
                #8, 243, 123
              </h3>
              <h5 className="explorer__blocks__wrapper__item__header__left__time">mined 5s ago</h5>
            </div>

            <h3 className="explorer__blocks__wrapper__item__header__transactions">82 TXs</h3>
          </div>
          <div className="explorer__blocks__wrapper__item__count">
            {[...Array(100)].map((x, i) => (
              <div className="explorer__blocks__wrapper__item__count__block" key={i + 1}>
                {/* {i + 1} */}
              </div>
            ))}
          </div>
          <div className="explorer__blocks__wrapper__item__footer">
            <h3 className="explorer__blocks__wrapper__item__footer__text">6 MORE TX</h3>
            <div className="explorer__blocks__wrapper__item__footer__next">
              <img src={nextIcon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockWrapper;

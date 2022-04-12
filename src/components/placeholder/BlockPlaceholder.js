const BlockPlaceholder = () => {
  return (
    <div className="explorer__blocks__wrapper__item">
      <div className="explorer__blocks__wrapper__item__header">
        <div className="explorer__blocks__wrapper__item__header__left">
          <h3 className="explorer__blocks__wrapper__item__header__left__number">
            <div className="placeholder__title"></div>
          </h3>
          <h5 className="explorer__blocks__wrapper__item__header__left__time">
            <div className="placeholder__sub"></div>
          </h5>
        </div>

        <h3 className="explorer__blocks__wrapper__item__header__transactions">
          <div className="placeholder__sub"></div>
        </h3>
      </div>
      <div className="explorer__blocks__wrapper__item__count__placeholder">
        {[...Array(34)].map((x, i) => (
          <div className="explorer__blocks__wrapper__item__count__block__placeholder" key={i}>
            {/* {i + 1} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockPlaceholder;

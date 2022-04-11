import logo from '../assets/images/logo.svg';
import dashboardIcon from '../assets/images/dashboard.svg';
import explorerIcon from '../assets/images/explorer.svg';
import projectIcon from '../assets/images/projects.svg';
import settingIcon from '../assets/images/setting.svg';
import logoutIcon from '../assets/images/logout.svg';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__wrapper__logo">
            <img className="sidebar__wrapper__logo__image" src={logo} />
          </div>
          <div className="sidebar__wrapper__menu">
            <div className="sidebar__wrapper__menu__option">
              <img className="sidebar__wrapper__menu__option__image" src={dashboardIcon} />
              <h2>DASHBOARD</h2>
            </div>
            <div className="sidebar__wrapper__menu__option">
              <img className="sidebar__wrapper__menu__option__image" src={projectIcon} />
              <h2>PROJECTS</h2>
            </div>
            <div className="sidebar__wrapper__menu__option selected">
              <img className="sidebar__wrapper__menu__option__image" src={explorerIcon} />
              <h2>EXPLORER</h2>
            </div>
          </div>
        </div>
        <div className="sidebar__wrapper__base">
          <div className="sidebar__wrapper__base__option">
            <img className="sidebar__wrapper__base__option__image" src={settingIcon} />
            <h2>SETTINGS</h2>
          </div>
          <div className="sidebar__wrapper__base__option">
            <img className="sidebar__wrapper__base__option__image" src={logoutIcon} />
            <h2>LOGOUT</h2>
          </div>
        </div>
      </div>

      <div className="explorer">
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

        <div className="explorer__blocks">
          <div className="explorer__blocks__wrapper">
            <div className="explorer__blocks__wrapper__item">
              <div>
                <h3>#8, 243, 123</h3>
                <h5>mined 5s ago</h5>
              </div>
              <h3>82 TXs</h3>
            </div>
            <div className="explorer__blocks__wrapper__item"></div>
            <div className="explorer__blocks__wrapper__item"></div>
            <div className="explorer__blocks__wrapper__item"></div>
            <div className="explorer__blocks__wrapper__item"></div>
            <div className="explorer__blocks__wrapper__item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

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
        <div className="explorer__header"></div>
      </div>
    </div>
  );
};

export default Dashboard;

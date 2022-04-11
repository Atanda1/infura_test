import dashboardIcon from './assets/images/dashboard.svg';
import explorerIcon from './assets/images/explorer.svg';
import projectIcon from './assets/images/projects.svg';
import settingIcon from './assets/images/setting.svg';
import logoutIcon from './assets/images/logout.svg';

export const menu = [
  {
    title: 'DASHBOARD',
    image: dashboardIcon
  },
  {
    title: 'PROJECT',
    image: projectIcon
  },
  {
    title: 'EXPLORER',
    image: explorerIcon,
    selected: true
  }
];

export const baseMenu = [
  {
    title: 'SETTING',
    image: settingIcon
  },
  {
    title: 'LOGOUT',
    image: logoutIcon
  }
];

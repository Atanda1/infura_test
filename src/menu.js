import dashboardIcon from './assets/images/dashboard.svg';
import explorerIcon from './assets/images/explorer.svg';
import projectIcon from './assets/images/projects.svg';
import settingIcon from './assets/images/setting.svg';
import logoutIcon from './assets/images/logout.svg';

export const menu = [
  {
    id: 1,
    title: 'DASHBOARD',
    image: dashboardIcon
  },
  {
    id: 2,
    title: 'PROJECT',
    image: projectIcon
  },
  {
    id: 3,
    title: 'EXPLORER',
    image: explorerIcon,
    selected: true
  }
];

export const baseMenu = [
  {
    id: 1,
    title: 'SETTING',
    image: settingIcon
  },
  {
    id: 2,
    title: 'LOGOUT',
    image: logoutIcon
  }
];

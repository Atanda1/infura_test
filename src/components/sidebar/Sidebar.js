import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import SidebarBaseMenu from './SidebarBaseMenu';
const Sidebar = () => {
  return (
    <>
      <div className="sidebar__wrapper">
        <SidebarLogo />
        <SidebarMenu />
      </div>
      <SidebarBaseMenu />
    </>
  );
};

export default Sidebar;

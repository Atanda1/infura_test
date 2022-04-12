import { baseMenu } from '../../menu';

const SidebarBaseMenu = () => {
  return (
    <div className="sidebar__base">
      {baseMenu.map((item) => (
        <div key={item.id} className="sidebar__base__option">
          <img className="sidebar__base__option__image" src={item.image} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SidebarBaseMenu;

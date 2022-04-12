import { menu } from '../../menu';

const SidebarMenu = () => {
  return (
    <div className="sidebar__wrapper__menu">
      {menu.map((item) => (
        <div
          key={item.id}
          className={`${item.selected ? 'selected' : ''} sidebar__wrapper__menu__option`}>
          <img className="sidebar__wrapper__menu__option__image" src={item.image} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;

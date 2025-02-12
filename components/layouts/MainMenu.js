import Link from 'next/link';
import MainMenuData from '../../data/MainMenu.json';

const MainMenu = () => {
    return (
        (<ul className="mainmenu">
            {MainMenuData?.map((menu, menuIndex) => (
                <li
                    className={menu.hasChildren ? "has-dropdown" : ""}
                    key={`menu-item-${menuIndex}`}
                >
                    <Link href={menu.url} legacyBehavior>{menu.title}</Link>
                    {menu.hasChildren && (
                        <ul className="axil-submenu">
                            {menu.clildrens?.map((submenuItem, submenuIndex) => (
                                <li key={`submenu-item-${submenuIndex}`}>
                                    <Link href={submenuItem.url} legacyBehavior>{submenuItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>)
    );
};

export default MainMenu;

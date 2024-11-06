import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AddIcon, HomeIcon, SalesIcon, SearchIcon } from "../../assets";
import { NavbarType } from "../../utils";
function Header() {
  const NavbarStructure: NavbarType[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Search",
      path: "/categories",
      icon: SearchIcon,
    },
    {
      id: 3,
      name: "Sales",
      path: "/sales",
      icon: SalesIcon,
    },
    {
      id: 4,
      name: "Add",
      path: "/add",
      icon: AddIcon,
    },
  ];
  return (
    <header className="container py-5 flex items-center justify-between">
      <a href="/">
        <img src={Logo} width={200} alt="" />
      </a>
      <nav className="flex items-center gap-3">
        {NavbarStructure.map((item: NavbarType) => (
          <NavLink
            key={item.id}
            className={
              " flex items-center h-[50px] gap-2 p-4 rounded-md text-white bg-primary"
            }
            to={item.path}
          >
            <item.icon />
            <p>{item.name}</p>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBars,
  faCompass,
  faUsers,
  faCogs,
  faServer,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

const menuItems = [
  { title: "Dashboard", icon: faCompass },
  { title: "Users", icon: faUsers },
  { title: "Cloud services", icon: faCloud },
  { title: "Usage data", icon: faCogs },
  { title: "Server list", icon: faServer }
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button style={{marginRight:"10px"}} className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
       
      <ul>
        {menuItems.map(item => (
          <li key={item.title}>
            <div className={"sidebar__listItem"}>
              <FontAwesomeIcon className={"sidebar__icon"} icon={item.icon} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span ><Link to="adminDashboard">{item.title}</Link></span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

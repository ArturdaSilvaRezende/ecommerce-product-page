import { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/useRedux";
import { isToggleHeader, isResizeMenuHeader } from "../../features/toggles";
import IconMenu from "../../assets/img/header/icon-menu.svg";
import IconClose from "../../assets/img/header/icon-close.svg";
import Logo from "../../assets/img/header/logo.svg";
import * as C from "./style";
import "../../assets/GlobalStyles/animation.css";

const HeaderMenu = () => {
  const isToggleMenu = useAppSelector((state) => state.toggle.isToggleHeader);
  const dispatch = useAppDispatch();

  const handleOpenMenu = () => {
    dispatch(isToggleHeader());
  };

  const handleCloseMenu = () => {
    dispatch(isToggleHeader());
  };

  const handleResize = useCallback(() => {
    dispatch(isResizeMenuHeader(window.innerWidth > 767));
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <C.HeaderMenu>
      <button onClick={() => handleOpenMenu()}>
        <img src={IconMenu} alt="btn-icon-open-menu" />
      </button>
      <a className="HeaderMenu__logo" href="/">
        <img src={Logo} alt="icon-logo-menu" />
      </a>
      <nav
        className={`HeaderMenu__nav ${
          isToggleMenu ? "fadeIn displayBlock" : "fadeOut displayNone"
        }`}
      >
        <div className="HeaderMenu__ul">
          <button onClick={() => handleCloseMenu()}>
            <img src={IconClose} alt="btn-icon-close-menu" />
          </button>

          <ul>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Women</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </C.HeaderMenu>
  );
};

export default HeaderMenu;

import { useContext } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/svg/devfinder.svg";
import DarkIcon from "../../assets/svg/moon.svg";
import LightIcon from "../../assets/svg/sun.svg";
import { ThemeContext } from "../../context/themeContext";

interface Props {
  onClick: () => void;
}
const Header: React.FC<Props> = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles[`header`]}>
      <div className={styles[`header__logo`]}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles[`header__theme`]}>
        <div className={styles[`header__theme--text`]}>
          <p>{theme === "light" ? "dark" : "light"}</p>
        </div>
        <div className={styles[`header__theme--icon`]} onClick={onClick}>
          <img src={theme === "light" ? DarkIcon : LightIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

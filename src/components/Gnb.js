import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { Menu } from "semantic-ui-react";
import { HOME, ABOUT, HOME_URL, ABOUT_URL } from "../constants/gnb";
import styles from "../styles/Gnb.module.css";

function Gnb() {
  const [activeItem, setActiveItem] = useState(HOME);
  const router = useRouter();

  const handleMenuClick = (e, data) => {
    const selectedMenu = data.name;

    if (activeItem === selectedMenu) {
      return;
    }

    setActiveItem(selectedMenu);

    switch (selectedMenu) {
      case HOME: {
        router.push(HOME_URL);
        break;
      }
      case ABOUT: {
        router.push(ABOUT_URL);
        break;
      }
      default:
    }
  };
  return (
    <div className={styles.gnb}>
      <Menu inverted>
        <Menu.Item
          name={HOME}
          active={activeItem === HOME}
          onClick={handleMenuClick}
        />
        <Menu.Item
          name={ABOUT}
          active={activeItem === ABOUT}
          onClick={handleMenuClick}
        />
      </Menu>
    </div>
  );
}

export default Gnb;

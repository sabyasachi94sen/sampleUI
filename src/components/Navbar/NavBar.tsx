import { FunctionComponent } from "react";
import styles from "./NavBar.module.css";

const NavBar: FunctionComponent = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.menu}>
        <div className={styles.instanceParent}>
          <img className={styles.frameChild} alt="" src="../group-85.svg" />
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.home}>Our Story</div>
            <div className={styles.topFruitsParent}>
              <div className={styles.home}>Top Fruits</div>
              <img
                className={styles.iconsaxlineararrowup2}
                alt=""
                src="../iconsaxlineararrowup2.svg"
              />
            </div>
            <div className={styles.home}>Pricing</div>
            <div className={styles.home}>Say Hello!</div>
          </div>
        </div>
        <div className={styles.primaryButton1Parent}>
          <div className={styles.primaryButton1}>
            <div className={styles.explore}>
              <span>Clock</span>
              <span className={styles.in}>In</span>
            </div>
          </div>
          <div className={styles.primaryButton2}>
            <div className={styles.explore}>Lets Build</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

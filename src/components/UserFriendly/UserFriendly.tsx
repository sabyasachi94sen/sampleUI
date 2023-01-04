import { FunctionComponent } from "react";
import styles from "./UserFriendly.module.css";

const UserFriendly: FunctionComponent = () => {
  return (
    <div className={styles.fold2}>
      <div className={styles.fold2Inner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameItem} alt="" src="../ellipse-14.svg" />
            <img className={styles.frameItem} alt="" src="../ellipse-14.svg" />
            <img className={styles.frameItem} alt="" src="../ellipse-14.svg" />
          </div>
          <div className={styles.frameDiv} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.blackFridaySaleParent}>
            <b className={styles.blackFridaySale}>BLACK FRIDAY SALE</b>
            <div className={styles.offParent}>
              <div className={styles.off}>40% OFF</div>
              <div className={styles.primaryButton1}>
                <div className={styles.explore}>BUY NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ubCityNewDelhi5AvenueStrParent}>
          <div className={styles.ubCityNewDelhi5AvenueStr}>
            UB City New Delhi,5 Avenue Street,India.
          </div>
          <div
            className={styles.ubCityNewDelhi5AvenueStr}
          >{`Terms & Conditions`}</div>
          <div className={styles.ubCityNewDelhi5AvenueStr}>Privacy Policy</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ellipseGroup}>
          <img
            className={styles.frameChild1}
            alt=""
            src="../ellipse-17@2x.png"
          />
          <div className={styles.silvia}>Silvia</div>
          <div className={styles.blogger}>Blogger</div>
        </div>
        <img className={styles.frameIcon} alt="" src="../frame-82@2x.png" />
        <div className={styles.frameChild2} />
        <img className={styles.groupIcon} alt="" src="../group-14.svg" />
        <img className={styles.frameChild3} alt="" src="../group-229.svg" />
      </div>
      <div className={styles.loremIpsumParent}>
        <div className={styles.loremIpsum}>LOREM IPSUM</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild4} />
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
        <div className={styles.graphsToShowYourWork}>
          Graphs to show your work.
        </div>
      </div>
    </div>
  );
};

export default UserFriendly;

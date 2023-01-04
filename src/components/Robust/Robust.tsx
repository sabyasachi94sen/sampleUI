import { FunctionComponent } from "react";
import styles from "./Robust.module.css";

const Robust: FunctionComponent = () => {
  return (
    <div className={styles.fold5}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.homepageSeenComputerScreenWrapper}>
            <img
              className={styles.homepageSeenComputerScreenIcon}
              alt=""
              src="../homepageseencomputerscreen-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.robustAndMalleableParent}>
            <b className={styles.robustAndMalleable}>Robust and Malleable</b>
            <div className={styles.frameGroup}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-25.svg"
                />
                <div className={styles.createACompellingWebsite}>
                  Create a compelling website.
                </div>
              </div>
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-24.svg"
                />
                <div className={styles.useCustomCodesLikeNoOther}>
                  Use custom codes like no other.
                </div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-251.svg"
                />
                <div className={styles.designsASwiftStreamlinedD}>
                  Designs a swift, streamlined design that is clean,
                  minimalistic, futuristic, and has an unlimited gallery store.
                </div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-26.svg"
                />
                <div className={styles.useCustomCodesLikeNoOther}>
                  Instant setup - create a website in just minutes.
                </div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-27.svg"
                />
                <div className={styles.useCustomCodesLikeNoOther}>
                  Get a custom Email ID.
                </div>
              </div>
              <div className={styles.ellipseContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-271.svg"
                />
                <div className={styles.useCustomCodesLikeNoOther}>
                  Have the complete process taken care of for you.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.primaryButton1}>
            <div className={styles.explore}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robust;

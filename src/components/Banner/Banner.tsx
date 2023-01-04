import { FunctionComponent } from "react";
import styles from "./Banner.module.css"
const Banner: FunctionComponent = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.frameParent}>
        <div className={styles.designYourBusinessInYourSParent}>
          <div className={styles.designYourBusinessInYourS}>
            Design your business in your style!
          </div>
          <div className={styles.superEasyToUseReadyToGo}>
            <p className={styles.superEasyTo}>
              Super easy to use, ready to go designs,
            </p>
            <p className={styles.superEasyTo}>
              just put your business details and
            </p>
            <p className={styles.yourAreOnline}>your are online...</p>
          </div>
        </div>
        <div className={styles.primaryButton1}>
          <div className={styles.explore}>Lets Built Websites!</div>
        </div>
      </div>
      <div className={styles.bannerChild} />
      <div className={styles.bannerItem} />
      <div className={styles.bannerInner}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.heroPicvid}>
            <div className={styles.frameGroup}>
              <div className={styles.groupContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild} />
                    <div className={styles.welcomeToWezbo}>
                      Welcome to Wezbo
                    </div>
                  </div>
                </div>
                <img
                  className={styles.mouse1Icon}
                  alt=""
                  src="../mouse-1@2x.png"
                />
                <div className={styles.frameItem} />
                <div className={styles.iconHomeParent}>
                  <img
                    className={styles.iconHome}
                    alt=""
                    src="../-icon-home.svg"
                  />
                  <img
                    className={styles.iconHeart}
                    alt=""
                    src="../-icon-heart.svg"
                  />
                  <img
                    className={styles.iconUser}
                    alt=""
                    src="../-icon-user.svg"
                  />
                  <img
                    className={styles.iconCart}
                    alt=""
                    src="../-icon-cart.svg"
                  />
                </div>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="../frame-45@2x.png"
                />
                <div className={styles.wezboinParent}>
                  <div className={styles.wezboin}>Wezbo.in</div>
                  <div className={styles.lineDiv} />
                </div>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-46@2x.png"
                />
              </div>
              <img
                className={styles.groupChild1}
                alt=""
                src="../frame-42.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

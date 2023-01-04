import { FunctionComponent } from "react";
import styles from "./Foundation.module.css";

const Foundation: FunctionComponent = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.frameChild} alt="" src="../ellipse-6.svg" />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-58@2x.png"
      />
      <div className={styles.aWebsiteFoundationDesignedParent}>
        <b className={styles.aWebsiteFoundationDesigned}>
          A website foundation designed for expansion
        </b>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.eosIconsloadingParent}>
              <img
                className={styles.eosIconsloading}
                alt=""
                src="../eosiconsloading.svg"
              />
              <div className={styles.quickerLoadingParent}>
                <b className={styles.quickerLoading}>Quicker loading</b>
                <div className={styles.wezboIsOptimizedForSpeed}>
                  Wezbo is optimized for speed, so your site will load faster.
                </div>
              </div>
            </div>
            <div className={styles.eosIconsloadingParent}>
              <img
                className={styles.arcticonsmindfulnotifier}
                alt=""
                src="../arcticonsmindfulnotifier.svg"
              />
              <div className={styles.quickerLoadingParent}>
                <b className={styles.designedWithSeoInMind}>
                  Designed with SEO in mind
                </b>
                <div className={styles.obtainTheSeoCapabilitiesYo}>
                  Obtain the SEO capabilities you require to improve your
                  website for search exposure.
                </div>
              </div>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              <div className={styles.enterpriseLevelSecurityParent}>
                <b className={styles.enterpriseLevelSecurity}>
                  Enterprise-level security
                </b>
                <div className={styles.weProtectYourSiteAndItsU}>
                  We protect your site and its users' data around the clock.
                </div>
              </div>
            </div>
            <div className={styles.eosIconsloadingParent}>
              <img
                className={styles.arcticonsmindfulnotifier}
                alt=""
                src="../carboninfrastructureclassic.svg"
              />
              <div className={styles.quickerLoadingParent}>
                <b className={styles.infrastructureThatIsResilie}>
                  Infrastructure that is resilient
                </b>
                <div className={styles.evenAmidTrafficSurgesMult}>
                  Even amid traffic surges, multi-cloud hosting provides 99.9%
                  uptime.
                </div>
              </div>
            </div>
            <div className={styles.raphaelusersParent}>
              <img
                className={styles.arcticonsmindfulnotifier}
                alt=""
                src="../raphaelusers.svg"
              />
              <div className={styles.quickerLoadingParent}>
                <b className={styles.everyoneCanUseIt}>Everyone can use it.</b>
                <div className={styles.createAnInclusiveWebsiteWi}>
                  Create an inclusive website with built-in accessibility
                  features.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.primaryButton1}>
            <div className={styles.explore}>EXPLORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;

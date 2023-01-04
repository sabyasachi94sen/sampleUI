import { FunctionComponent } from "react";
import styles from "./Platform.module.css";

const Platform: FunctionComponent = () => {
  return (
    <div className={styles.fold3}>
      <div className={styles.onePlatformWithEndlessOptParent}>
        <b className={styles.onePlatformWithEndlessOpt}>
          One platform, with endless options
        </b>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.groupChild}
              alt=""
              src="../rectangle-18@2x.png"
            />
            <div className={styles.groupItem} />
            <div className={styles.frameWrapper}>
              <div className={styles.unlimitedCreativityParent}>
                <b className={styles.unlimitedCreativity}>
                  Unlimited creativity
                </b>
                <div className={styles.createAWebsiteWithAFullR}>
                  Create a website with a full range of sophisticated
                  capabilities to bring your idea to life.
                </div>
              </div>
            </div>
            <div className={styles.primaryButton2}>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.groupChild}
                alt=""
                src="../rectangle-181@2x.png"
              />
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.strongInfrastructureParent}>
                <b className={styles.strongInfrastructure}>
                  Strong infrastructure
                </b>
                <div className={styles.getAFoundationBuiltForEnt}>
                  Get a foundation built for enterprise-level scalability and
                  peace of mind.
                </div>
              </div>
            </div>
            <div className={styles.primaryButton2}>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../rectangle-182@2x.png"
                />
                <div className={styles.groupChild1} />
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.theAreaForDevelopmentParent}>
                  <b className={styles.theAreaForDevelopment}>
                    The area for development
                  </b>
                  <div className={styles.withBuiltInMarketingAndBu}>
                    With built-in marketing and business solutions, you can
                    convert and expand with ease.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.groupChild2} />
            <div className={styles.primaryButton2}>
              <div className={styles.button}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

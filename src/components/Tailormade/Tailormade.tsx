import { FunctionComponent } from "react";
import styles from "./Tailormade.module.css";

const Tailormade: FunctionComponent = () => {
  return (
    <div className={styles.fold6}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameGroup}>
            <div className={styles.tailormadeSolutionParent}>
              <b className={styles.tailormadeSolution}>
                <p className={styles.tailormadeSolution1}>
                  Tailormade solution
                </p>
              </b>
              <div className={styles.offerAGreatSelectionOfProParent}>
                <div className={styles.offerAGreatSelectionOfPro}>
                  1. Offer a great selection of professional website templates.
                </div>
                <div className={styles.offerAGreatSelectionOfPro}>
                  2. Flexibility to include additional features.
                </div>
                <div className={styles.offerAGreatSelectionOfPro}>
                  3. Get the intuitive features and customize workflows as per
                  your needs.
                </div>
              </div>
            </div>
            <div className={styles.tailormadeSolutionParent}>
              <b
                className={styles.inexpensiveReasonable}
              >{`Inexpensive & reasonable`}</b>
              <div className={styles.offerAGreatSelectionOfProParent}>
                <div className={styles.offerAGreatSelectionOfPro}>
                  1. More advanced options are available that build a premium
                  website.
                </div>
                <div className={styles.fullFledgedAndCompleteCont}>
                  2. Full-fledged and complete control in designing with premium
                  features.
                </div>
                <div className={styles.offerAGreatSelectionOfPro}>
                  3. Good to go if you need an online presence or are an
                  influencer.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.primaryButton1}>
            <div className={styles.explore}>Learn More</div>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="../group-207.svg" />
      </div>
    </div>
  );
};

export default Tailormade;

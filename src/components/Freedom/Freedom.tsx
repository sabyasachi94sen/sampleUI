import { FunctionComponent } from "react";
import styles from "./Freedom.module.css";

const Freedom: FunctionComponent = () => {
  return (
    <div className={styles.fold1}>
      <div className={styles.f1}>
        <div className={styles.theFreedomToCreateTheWebsParent}>
          <b className={styles.theFreedomToCreateTheWebs}>
            The Freedom to Create the Website You Want
          </b>
          <div className={styles.getGreatResultsWithOurTre}>
            Get great results with our trendy, elegant, and stunning templates
            that provide a robust framework. The navigation is simple and
            greatly impacts your web design. Use our optimized layout and
            industry-specific designs that helps to boost your business or any
            startup.
          </div>
          <div className={styles.primaryButton1}>
            <div className={styles.explore}>EXPLORE</div>
          </div>
        </div>
        <div className={styles.pic1}>
          <img className={styles.pic1Child} alt="" src="../frame-56@2x.png" />
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="../frame-58@2x.png"
            />
            <div className={styles.productName}>Product Name</div>
            <div className={styles.addMoreDetailsAboutThePro}>
              Add more details about the products, such as product
              specifications
            </div>
            <div className={styles.primaryButton2}>
              <div className={styles.explore}>Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freedom;

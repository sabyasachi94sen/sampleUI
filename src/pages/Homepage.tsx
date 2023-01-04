import { FunctionComponent } from "react";
import Banner from "../components/Banner/Banner";
import Freedom from "../components/Freedom/Freedom";
import NavBar from "../components/Navbar/NavBar";
import UserFriendly from "../components/UserFriendly/UserFriendly";
import Platform from "../components/Platform/Platform"
import Foundation from "../components/Foundation/Foundation";
import Tailormade from "../components/Tailormade/Tailormade";
import Robust from "../components/Robust/Robust";
import SignUp from "../components/SignUp/SignUp";
import Footer from "../components/Footer/Footer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <Banner />
      <Freedom />
      <NavBar />
      <div className={styles.fold2Parent}>
        <UserFriendly />
        <Platform />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.userFriendlyParent}>
            <b className={styles.userFriendly}>User-Friendly</b>
            <div className={styles.compatibilityIsAProminentF}>
              Compatibility is a prominent factor when it comes to building a
              website on your own, and our easy-to-use website builder is apt
              for absolute beginners and comes with a drag-and-drop builder,
              assertive editing tools, and endless opportunities.
            </div>
          </div>
          <div className={styles.premiumAttributesParent}>
            <b className={styles.premiumAttributes}>Premium Attributes</b>
            <div className={styles.moreAdvancedOptionsAreAvai}>
              <p className={styles.moreAdvancedOptions}>
                1. More advanced options are available that build a premium
                website.
              </p>
              <p className={styles.moreAdvancedOptions}>
                2. Full-fledged and complete control in designing with premium
                features.
              </p>
              <p className={styles.goodToGo}>
                3. Good to go if you need an online presence or are an
                influencer.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.primaryButton2}>
          <div className={styles.button}>Learn More</div>
        </div>
      </div>
      <Foundation />
      <Tailormade />
      <Robust />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Homepage;

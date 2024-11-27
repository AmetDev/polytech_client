import "react-loading-skeleton/dist/skeleton.css";

// import FirstScreen from "../../widgets/home/FirstScreen/FirstScreen";
// import Posts from "../../widgets/home/Posts/Posts";
// import HomeSearchBar from "../../features/home/HomeSearchBar/HomeSearchBar";
// import About from "../../widgets/home/About/About";
// import Background from "../../entities/home/Background/Background";
// import ContactForm from "../../widgets/home/ContactForm/ContactForm";
// import Departments from "../../widgets/home/Departments/Departments";
// import EssentialLinks from "../../widgets/home/EssentialLinks/EssentialLinks";
// import Ministries from "../../widgets/home/Ministries/Ministries";

import style from "@pages/home/home.module.scss";
import FirstScreen from "@widgets/home/FirstScreen/FirstScreen";
import HomeSearchBar from "@features/home/HomeSearchBar/HomeSearchBar";
import About from "@widgets/home/About/About";
import ContactForm from "@widgets/home/ContactForm/ContactForm";
import Departments from "@widgets/home/Departments/Departments";
import EssentialLinks from "@widgets/home/EssentialLinks/EssentialLinks";
import Ministries from "@widgets/home/Ministries/Ministries";
import Posts from "@widgets/home/Posts/Posts";

const Home = () => {
  return (
    <section>
      <FirstScreen />
      <div className={style.home__search}>
        <HomeSearchBar />
      </div>
      <div className={style.home__main}>
        <About />
        <Posts />
      </div>

      <ContactForm />
      <EssentialLinks />

      <Departments />
      <Ministries />
    </section>
  );
};

export default Home


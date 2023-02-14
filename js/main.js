import Toggler from "./Toggler.js";
import Scroll from "./Scroll.js";
import MainSwiper from "./MainSwiper.js";
import Loader from "./Loader.js";

Loader.run();

Toggler.click("navbar-toggler", "#navbar-toggler span");

Scroll.init("navbar");

Scroll.goTop("go-to-top");

MainSwiper.firstSwiper();
MainSwiper.secondSwiper();
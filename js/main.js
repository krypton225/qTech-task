import Toggler from "./Toggler.js";
import Scroll from "./Scroll.js";
import MainSwiper from "./MainSwiper.js";

Toggler.click("navbar-toggler", "#navbar-toggler span");

Scroll.init("navbar");

Scroll.goTop("go-to-top");

MainSwiper.firstSwiper();
import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
// import Home from "../pages/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/Home/index")
    },
    {
      path: "/movie",
      name: "Movie",
      component: () => import("../pages/movie/index")
    },   {
      path: "/tvseries",
      name: "TVseries",
      component: () => import("../pages/tvseries/index")
    },   {
      path: "/classiflcation",
      name: "Classiflcation",
      component: () => import("../pages/classiflcation/index")
    },
  ]
});

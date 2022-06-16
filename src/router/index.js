import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/fuse",
    name: "Fuse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fuse.vue"),
  },
  {
    path: "/export",
    name: "Export",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/export.vue"),
  },
  {
    path: "/digui",
    name: "Digui",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/digui.vue"),
  },
  {
    path: "/tuozhuai",
    name: "tuozhuai",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tuozhuai.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Slot.vue"),
    children: [
      {
        path: "/chil",
        name: "Chil",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/slotChildren/index.vue"
          ),
      },
    ],
  },
  {
    path: "/axios",
    name: "Axios",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Axios.vue"),
  },
  {
    path: "/echarts",
    name: "Echarts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/echarts.vue"),
  },
  {
    path: "/ctrl",
    name: "Ctrl",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/directive/Ctrl.vue"),
  },
  {
    path: "/postMian",
    name: "PostMian",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PostMian.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

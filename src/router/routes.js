import VueRouter from "vue-router";

import addTask from "../components/add-task";
import tasks from "../pages/tasks";

export default new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/",
    //   component: application,
    // },
    {
      path: "/",
      component: tasks
    },
    // {
    //   path: "/",
    //   component: task
    // },
    {
      path: "/add",
      component: addTask
    },
  ],
});

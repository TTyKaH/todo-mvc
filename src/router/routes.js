import VueRouter from "vue-router";

import tasks from "@/pages/tasks";
import addNewTask from "@/pages/add-new-task";
import signIn from "@/pages/sign-in";
import signUp from "@/pages/sign-up";

export default new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      name: 'tasks',
      component: tasks,
      meta: {
        breadcrumb: 'Home Page',
      },
    },
    {
      path: "/add-new-task",
      name: 'add-task',
      component: addNewTask,
      meta: {
        breadcrumb: 'add task',
      },
    },
    {
      path: "/sign-in",
      component: signIn,
      meta: {
        breadcrumb: 'sign in',
      },
    },
    {
      path: "/sign-up",
      component: signUp,
      meta: {
        breadcrumb: 'sign up',
      },
    },
  ],
});
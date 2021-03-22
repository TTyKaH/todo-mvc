import VueRouter from "vue-router";

import tasks from "@/pages/tasks";
import addNewTask from "@/pages/add-new-task";
import signIn from "@/pages/sign-in";
import signUp from "@/pages/sign-up";

export default new VueRouter({
  mode: "history",
  routes: [{
      path: "/",
      name: 'Home',
      component: tasks,
    },
    {
      path: "/add-new-task",
      name: 'Add Task',
      component: addNewTask,
    },
    {
      path: "/sign-in",
      name: 'Sign In',
      component: signIn,
    },
    {
      path: "/sign-up",
      name: 'Sign Up',
      component: signUp,
    },
  ],
});
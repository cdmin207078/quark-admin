import Vue from "vue";
import Router from "vue-router";
import Dashboard from './views/dashboard.vue';
import ArticleList from "./views/article/list.vue";
import ArticleEdit from "./views/article/edit.vue";
import ArticleCategories from "./views/article/categories.vue";
import ArticleTags from "./views/article/tags.vue";
import UserList from "./views/user/list.vue";
import UserEdit from "./views/user/edit.vue";
import UserProfile from "./views/user/profile.vue";
import OptionGeneral from "./views/option/general.vue";
import OptionMedia from "./views/option/media.vue";
import OptionPermalink from "./views/option/permalink.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticleList
    },
    {
      path: "/articles/create",
      name: "articles-create",
      component: ArticleEdit
    },
    {
      path: "/articles/categories",
      name: "articles-categories",
      component: ArticleCategories
    },
    {
      path: "/articles/tags",
      name: "articles-tags",
      component: ArticleTags
    },

    {
      path: "/users",
      name: "users",
      component: UserList
    },
    {
      path: "/users/credate",
      name: "users-credate",
      component: UserEdit
    },
    {
      path: "/users/profile",
      name: "users-profile",
      component: UserProfile
    },
    {
      path: "/option/general",
      name: "option-general",
      component: OptionGeneral
    },
    {
      path: "/option/media",
      name: "option-media",
      component: OptionMedia
    },
    {
      path: "/option/permalink",
      name: "option-permalink",
      component: OptionPermalink
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

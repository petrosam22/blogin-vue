import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import PostsView from '../views/PostsView.vue'
import EditView from '../views/EditView.vue'
 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView,
  },
  {
    path: '/Create/Post',
    name: 'CreatePostView',
    component: CreatePostView,
  },
  {
    path: '/Posts',
    name: 'PostsView',
    component: PostsView,
  },
  {
    path: '/edit/:id',
    name: 'EditView',
    component: EditView,
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

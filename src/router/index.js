// 路由配置文件
import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IntroPage from '../views/IntroPage.vue'
import SurveyPage from '../views/SurveyPage.vue'

// 定义路由
const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroPage
  },
  {
    path: '/survey',
    name: 'survey',
    component: SurveyPage
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
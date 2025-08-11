<script setup>
// App.vue 作为根组件，负责渲染路由视图
</script>

<template>
  <!-- 路由视图 -->
  <router-view />
</template>

<style>
/* 全局样式 */
html, body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

/* 移动端适配 */
html {
  font-size: 16px;
}

/* 移动端适配：根据屏幕宽度调整基础字体大小 */
@media screen and (max-width: 375px) {
  html {
    font-size: 14px;
  }
}

@media screen and (min-width: 376px) and (max-width: 414px) {
  html {
    font-size: 15px;
  }
}
</style>

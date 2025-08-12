<template>
  <div class="intro-page">
    <div class="header">
      <h1>中秋节礼物调查</h1>
      <div class="moon-image">
        <van-image width="200" height="200" :src="moonImageUrl" />
      </div>
    </div>
    
    <div class="content">
      <h2>活动介绍22</h2>
      <p>亲爱的朋友们：</p>
      <p>中秋佳节即将来临，为了让大家度过一个愉快的节日，我们特别准备了节日礼物。</p>
      <p>为了更好地了解大家的喜好，我们特别设计了这份简短的调查问卷。</p>
      <p>您的反馈对我们非常重要，感谢您抽出宝贵的时间参与！</p>
    </div>
    
    <div class="action">
      <van-button type="primary" size="large" @click="goToSurvey">开始调查</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// 路由实例
const router = useRouter()

// 中秋节月亮图片URL（这里使用占位图，实际项目中可替换为真实图片）
const moonImageUrl = ref('https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg')

// 跳转到调查页面
const goToSurvey = () => {
  router.push('/survey')
}
</script>

<style scoped>
.intro-page {
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #ff8800;
  font-size: 24px;
  margin-bottom: 20px;
}

.moon-image {
  margin: 20px auto;
}

.content {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}

.content h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
}

.content p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: left;
  color: #666;
}

.action {
  margin-top: auto;
  padding-bottom: 20px;
}

/* 移动端适配 */
@media screen and (max-width: 375px) {
  .header h1 {
    font-size: 22px;
  }
  
  .content h2 {
    font-size: 18px;
  }
  
  .content p {
    font-size: 14px;
  }
}
</style>
<template>
  <div class="survey-page">
    <van-nav-bar
      title="中秋节礼物调查"
      left-arrow
      @click-left="onClickLeft"
    />
    
    <div class="form-container">
      <van-form @submit="onSubmit">
        <!-- 礼物类型选择（单选） -->
        <div class="form-item">
          <h3>1. 您更喜欢哪种中秋礼物？<span class="required">*</span></h3>
          <van-radio-group v-model="formData.giftType" direction="vertical">
            <van-radio name="money">现金红包</van-radio>
            <van-radio name="mooncake">月饼礼盒</van-radio>
            <van-radio name="gift">实物礼品</van-radio>
          </van-radio-group>
        </div>
        
        <!-- 礼物类别选择（多选，仅当选择实物礼品时显示） -->
        <div class="form-item" v-if="formData.giftType === 'gift'">
          <h3>2. 您喜欢哪类礼物？（可多选）</h3>
          <van-checkbox-group v-model="formData.giftCategories" direction="vertical">
            <van-checkbox name="daily">日用品</van-checkbox>
            <van-checkbox name="electronic">电子产品</van-checkbox>
            <van-checkbox name="toy">玩具</van-checkbox>
            <van-checkbox name="gameCoin">游戏币</van-checkbox>
          </van-checkbox-group>
        </div>
        
        <!-- 其他建议（文本输入） -->
        <div class="form-item">
          <h3>{{ formData.giftType === 'gift' ? '3' : '2' }}. 您有其他建议吗？</h3>
          <van-field
            v-model="formData.suggestion"
            rows="3"
            autosize
            type="textarea"
            maxlength="200"
            placeholder="请输入您的建议（选填）"
            show-word-limit
          />
        </div>
        
        <!-- 提交按钮 -->
        <div style="margin: 30px 0">
          <van-button round block type="primary" native-type="submit">
            提交调查
          </van-button>
        </div>
      </van-form>
    </div>
    
    <!-- 提交成功弹窗 -->
    <van-dialog v-model:show="showSuccessDialog" title="提交成功" confirm-button-text="确定" @confirm="goToIntro">
      <div class="success-message">
        <p>感谢您参与中秋节礼物调查！</p>
        <p>我们会根据大家的反馈准备节日礼物。</p>
        <p>祝您中秋节快乐！</p>
      </div>
    </van-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

// 路由实例
const router = useRouter()

// 表单数据
const formData = reactive({
  giftType: '', // 礼物类型：现金红包(money)、月饼礼盒(mooncake)、实物礼品(gift)
  giftCategories: [], // 礼物类别：日用品(daily)、电子产品(electronic)、玩具(toy)、游戏币(gameCoin)
  suggestion: '' // 其他建议
})

// 成功弹窗显示状态
const showSuccessDialog = ref(false)

// 返回上一页
const onClickLeft = () => {
  router.push('/')
}

// 表单提交
const onSubmit = () => {
  // 表单验证
  if (!formData.giftType) {
    showToast('请选择您喜欢的礼物类型')
    return
  }
  
  // 如果选择了实物礼品，但未选择礼物类别
  if (formData.giftType === 'gift' && formData.giftCategories.length === 0) {
    showToast('请至少选择一种礼物类别')
    return
  }
  
  // 在实际项目中，这里会发送数据到服务器
  console.log('提交的表单数据：', formData)
  
  // 显示提交成功弹窗
  showSuccessDialog.value = true
}

// 返回首页
const goToIntro = () => {
  router.push('/')
}
</script>

<style scoped>
.survey-page {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.form-container {
  padding: 20px;
}

.form-item {
  margin-bottom: 24px;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.form-item h3 {
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 16px;
  color: #323233;
  font-weight: 500;
}

.required {
  color: #ee0a24;
}

.success-message {
  padding: 20px;
  text-align: center;
}

.success-message p {
  margin: 8px 0;
  color: #666;
}

/* 移动端适配 */
@media screen and (max-width: 375px) {
  .form-container {
    padding: 15px;
  }
  
  .form-item {
    padding: 12px;
  }
  
  .form-item h3 {
    font-size: 15px;
  }
}
</style>
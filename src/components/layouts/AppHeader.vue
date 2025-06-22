<script setup></script>
<template>
  <div class="app-header">
    <div>
      <router-link to="/" class="logo">로고</router-link>
    </div>
    <div class="menu-wrapper">
      <router-link :to="{ name: 'places' }">장소</router-link>
      <div>apsb</div>
      <div>apsb</div>
    </div>
    <div>기타</div>
  </div>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 60px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .menu-wrapper {
    display: flex;
    gap: 20px;
  }

  div {
    font-size: 16px;
    color: #343a40;
  }
}
</style>

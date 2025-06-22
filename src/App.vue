<script setup>
import { RouterView } from 'vue-router'

import AppHeader from './components/layouts/AppHeader.vue'
import AppSidebar from './components/layouts/AppSidebar.vue'
import AppFooter from './components/layouts/AppFooter.vue'
</script>

<template>
  <div class="tc-admin">
    <AppHeader />
    <div class="contents">
      <AppSidebar />
      <main class="main">
        <RouterView />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.tc-admin {
  .contents {
    display: flex;
    min-height: calc(100vh - 120px);

    .main {
      flex: 1;
      padding: 24px;
    }
  }
}
</style>

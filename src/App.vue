<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">login</RouterLink>
        <RouterLink to="/home">home</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

<script setup lang="ts">
import LabeledInput from "@/components/molecules/LabeledInput.vue";
import BasicButton from "@/components/atoms/BasicButton.vue";
</script>

<template>
  <div class="container">
    <LabeledInput/>
    <BasicButton content="Log ind" large/>
  </div>
</template>

<style scoped lang="scss">
.container{
  border: 2px solid green;
  width: 50%;
  padding: 50px 100px;
}
</style>

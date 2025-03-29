<script setup lang="ts">
const props = defineProps({
  large: {type: Boolean, required: false},
  content: {type: String, required: true},
})
</script>

<template>
  <div>
    <button :class="['basicButton', props.large ? 'large' : 'default']">
      {{ props.content }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.basicButton {
  background-color: $actionRed;
  color: white;
  border-radius: 20px;
  border: none;
  padding: 10px 20px
}

.large {
  display: block;
  width: 100%;
}

.default {
  display: inline;
}
</style>

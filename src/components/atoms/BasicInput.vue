<script setup lang="ts">
const props = defineProps({
  placeholder: {type: String, required: true},
  id: {type: String, required: true},
  password: {type: Boolean, required: false},

})

</script>

<template>
<div class="inputContainer">
  <input :id="props.id" :type="props.password ? 'password' : 'text'" class="input" :placeholder="props.placeholder" />
  <div class="errorMessageContainer">
    <p class="errorMessage"></p>
  </div>
</div>
</template>

<style scoped lang="scss">
.inputContainer{
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  .input{
    border-top: 0;
    border-right: 0;
    border-left: 0;
    //padding: 10px 20px 20px 20px;
    //background-color: deeppink;
    outline: none;
  }
}
</style>

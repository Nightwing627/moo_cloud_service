<template>
  <div class="mb-2">
      <p class="mb-0">{{ label }}</p>
      <div class="progress" :style="{ height: "10px" }">
        <div class="progress-bar" :style={ width: `${value}%` }></div>
      </div>
    </div>
</template>

<script>
export default {
  props:['label', 'value']
}
</script>

<style></style>

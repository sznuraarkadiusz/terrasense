<template>
  <div>
    <button @click="isExpanded = !isExpanded" class="bg-gray-800 btn--details">
      {{ isExpanded ? 'Zwiń szczegóły' : 'Rozwiń szczegóły' }}
    </button>
    <div v-if="isExpanded">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false
    };
  }
};
</script>

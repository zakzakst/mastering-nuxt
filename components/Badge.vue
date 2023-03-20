<template>
  <span
    class="-left-12 text-xl w-8 h-8 text-white rounded-full inline-flex absolute items-center justify-center mr-4"
    :class="`${color}`"
  >
    <slot>&#10003;</slot>
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "bg-emerald-400",
  }
);
</script>

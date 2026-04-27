<template>
  <nav class="nav">
    <div class="nav-container">
      <span class="nav-logo">> Yuna</span>
      <button
        class="hamburger"
        @click="isOpen = !isOpen"
        :class="{ active: isOpen }"
      >
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" :class="{ active: isOpen }">
        <a href="/">Home</a>
        <a href="/docs">Docs</a>
        <a href="/legal">Legal</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

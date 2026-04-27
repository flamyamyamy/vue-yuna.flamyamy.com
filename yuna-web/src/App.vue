<template>
  <div class="app-wrapper">
    <nav class="nav">
      <div class="nav-container">
        <span class="nav-logo">> Yuna</span>

        <button
          class="hamburger"
          @click="isMenuOpen = !isMenuOpen"
          :class="{ active: isMenuOpen }"
        >
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links" :class="{ active: isMenuOpen }">
          <a href="/">Home</a>
          <a href="#docs">Documentation</a>
          <a href="/legal">Legal</a>
          <a href="/license">License</a>
        </div>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="glitch">Yuna Bot</h1>
          <p class="hero-description">
            Advanced Discord Moderation & Utility Platform. Modernes Design
            trifft auf maximale Performance.
          </p>
          <div class="hero-actions">
            <a
              href="https://discord.gg/RjTFsjRT7y"
              class="btn btn-primary"
              target="_blank"
              >Support Server</a
            >
            <a href="#docs" class="btn btn-secondary">Explore Docs</a>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img
            src="https://i.imgur.com/UyLDdGg.png"
            alt="Yuna"
            class="hero-image"
          />
        </div>
      </div>
    </section>

    <section id="docs" class="section">
      <h2 class="section-title">// Command Directory</h2>
      <div class="grid-1">
        <div
          v-for="category in commandData"
          :key="category.title"
          class="card doc-card"
        >
          <h3>{{ category.emoji }} {{ category.title }}</h3>
          <p class="doc-desc">{{ category.description }}</p>

          <div class="command-list">
            <div
              v-for="cmd in category.commands"
              :key="cmd.name"
              class="command-item"
            >
              <span class="prompt">{{ cmd.name }}</span>
              <p v-html="cmd.text"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { commandData } from "./data/commands.js";

// State für das Mobile Menu
const isMenuOpen = ref(false);
</script>

<style scoped>
/* Falls du komponenten-spezifisches CSS brauchst, hier rein. 
   Ansonsten nutzt App.vue das globale main.css aus der main.js */
.hero-image {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>

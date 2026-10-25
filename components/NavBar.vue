<template>
  <div class="flex flex-row justify-between items-center p-4 bg-white dark:bg-gray-800">
    <div class="flex items-center">
      <motion.img
        src="/favicon.ico"
        alt="logo"
        class="h-8 w-8 mr-2 2xl:h-12 2xl:w-12 hover:scale-110"
        :animate="{ rotate: rotation }"
        :transition="{ type: 'spring', stiffness: 100, damping: 12 }"
        @click="rotation += 360"
      />
      <span class="text-2xl 2xl:text-4xl font-semibold">Lucas Chang</span>
    </div>
    <div
      class="flex space-x-4 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 text-xl 2xl:text-2xl text-semibold"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        :class="{
          'text-primary underline underline-offset-4': route.path == link.path,
        }"
      >
        {{ link.name }}
      </NuxtLink>
      <a
        href="/resume.pdf"
      >
        Resume
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';

const rotation = ref(0);
const links = [
  { name: 'Home', path: '/' }
  // { name: 'Projects', path: '/projects' },
];

const route = useRoute();
</script>

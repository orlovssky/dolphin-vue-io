<script setup lang="ts">
import MainSnackbar      from '@/components/main/MainSnackbar.vue';
import MainSidebar       from '@/components/main/sidebar/MainSidebar.vue';
import { IoApp, IoView } from 'io-library';
import { useStore }      from 'vuex';
import { computed }      from 'vue';

const store = useStore();
const profile = computed(() => store.getters['main/profile']);
</script>

<template>
  <io-app :theme="profile.theme">
    <main-snackbar />

    <!-- САЙДБАР -->
    <main-sidebar mini />
    <!-- САЙДБАР КОНЕЦ -->

    <!-- СТРАНИЦЫ -->
    <io-view>
      <router-view />
    </io-view>
    <!-- СТРАНИЦЫ КОНЕЦ -->
  </io-app>
</template>
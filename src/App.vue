<script setup lang="ts">
import MainSidebar       from '@/components/main/sidebar/MainSidebar.vue';
import { IoApp, IoView } from 'io-library';
import { useStore }      from 'vuex';
import { computed }      from 'vue';

const store = useStore();
const profile = computed(() => store.getters['main/profile']);
</script>

<template>
  <io-app :theme="profile.theme">
    <main-sidebar mini />
    <io-view>
      <router-view />
    </io-view>
  </io-app>
</template>
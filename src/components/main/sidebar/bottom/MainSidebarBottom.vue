<script setup lang="ts">
import { IoList }              from 'io-library';

import MainSidebarBottomLocale from './MainSidebarBottomLocale.vue';
import MainSidebarBottomTheme  from './MainSidebarBottomTheme.vue';
</script>

<template>
  <io-list>
    <!-- ЯЗЫК -->
    <main-sidebar-bottom-locale />
    <!-- ЯЗЫК КОНЕЦ -->

    <!-- ТЕМА -->
    <main-sidebar-bottom-theme />
    <!-- ТЕМА КОНЕЦ -->
  </io-list>
</template>
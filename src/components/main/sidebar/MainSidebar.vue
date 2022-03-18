<script setup lang="ts">
import { IoDrawer }      from 'io-library';
import { useRoute }      from 'vue-router';
import { computed }      from 'vue';

import MainSidebarBottom from './bottom/MainSidebarBottom.vue';
import MainSidebarMiddle from './middle/MainSidebarMiddle.vue';
import MainSidebarTop    from './top/MainSidebarTop.vue';

const route = useRoute();

const showSidebarMiddle = computed(() => {
  if (route && route.name) {
    return ['Main'].includes(route.name.toString());
  } 
  return false;
});
</script>

<template>
  <io-drawer space-between>
    <!-- ТОП -->
    <main-sidebar-top />
    <!-- ТОП КОНЕЦ -->

    <!-- СЕРЕДИНА -->
    <main-sidebar-middle v-if="showSidebarMiddle" />
    <!-- СЕРЕДИНА КОНЕЦ -->

    <!-- НИЗ -->
    <main-sidebar-bottom />
    <!-- НИЗ КОНЕЦ -->
  </io-drawer>
</template>
<template>
  <io-drawer space-between>
    <main-sidebar-top />
    <main-sidebar-middle v-if="showSidebarMiddle" />
    <main-sidebar-bottom />
  </io-drawer>
</template>

<script lang="ts">
import { IoDrawer }                  from 'io-library';
import { useRoute }                  from 'vue-router';
import { defineComponent, computed } from 'vue';

import MainSidebarBottom             from './bottom/MainSidebarBottom.vue';
import MainSidebarMiddle             from './middle/MainSidebarMiddle.vue';
import MainSidebarTop                from './top/MainSidebarTop.vue';

export default defineComponent({
  name: 'MainSidebar',

  components: {
    MainSidebarTop,
    MainSidebarMiddle,
    MainSidebarBottom,
    IoDrawer,
  },

  setup () {
    const route = useRoute();

    const showSidebarMiddle = computed(() => {
      if (route && route.name) {
        return ['Main'].includes(route.name.toString());
      } 
      return false;
    });

    return {
      showSidebarMiddle
    };
  }
});
</script>
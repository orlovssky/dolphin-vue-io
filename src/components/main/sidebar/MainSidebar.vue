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
    IoDrawer,
    MainSidebarTop,
    MainSidebarMiddle,
    MainSidebarBottom,
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
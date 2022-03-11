<template>
  <io-drawer space-between>
    <main-sidebar-top />
    <main-sidebar-middle />
    <main-sidebar-bottom />
  </io-drawer>
</template>

<script lang="ts">
import { IoDrawer }        from 'io-library';
import { defineComponent } from 'vue';

import MainSidebarBottom   from './bottom/MainSidebarBottom.vue';
import MainSidebarMiddle   from './middle/MainSidebarMiddle.vue';
import MainSidebarTop      from './top/MainSidebarTop.vue';

export default defineComponent({
  name: 'MainSidebar',

  components: {
    MainSidebarTop,
    MainSidebarMiddle,
    MainSidebarBottom,
    IoDrawer,
  },
});
</script>
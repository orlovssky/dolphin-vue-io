<template>
  <io-list>
    <main-sidebar-bottom-locale />
    <main-sidebar-bottom-theme :profile="profile" />
  </io-list>
</template>

<script lang="ts">
import { ProfileModel }        from '@/models/main';
import { IoList }              from 'io-library';
import { useStore }            from 'vuex';
import {
  defineComponent,
  computed
} from 'vue';

import MainSidebarBottomLocale from './MainSidebarBottomLocale.vue';
import MainSidebarBottomTheme  from './MainSidebarBottomTheme.vue';

export default defineComponent({
  name: 'MainSidebar',

  components: {
    IoList,
    MainSidebarBottomLocale,
    MainSidebarBottomTheme,
  },

  setup () {
    const store = useStore();
    const profile = computed(() => store.getters['main/profile'] as ProfileModel);
    return {
      profile,
    };
  }
});
</script>
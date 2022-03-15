<template>
  <io-list>
    <!-- ЯЗЫК -->
    <main-sidebar-bottom-locale />
    <!-- ЯЗЫК КОНЕЦ -->

    <!-- ТЕМА -->
    <main-sidebar-bottom-theme :profile="profile" />
    <!-- ТЕМА КОНЕЦ -->
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
  name: 'MainSidebarBottom',

  components: {
    IoList,
    MainSidebarBottomLocale,
    MainSidebarBottomTheme,
  },

  setup () {
    const store = useStore();

    const profile = computed(() => {
      return store.getters['main/profile'] as ProfileModel;
    });
    
    return {
      profile,
    };
  }
});
</script>
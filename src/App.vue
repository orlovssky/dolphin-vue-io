<template>
  <io-app :theme="profile.theme">
    <main-sidebar mini />
    <io-view>
      <router-view />
    </io-view>
  </io-app>
</template>

<script lang="ts">
import MainSidebar          from '@/components/main/sidebar/MainSidebar.vue';
import { IoApp, IoView }    from 'io-library';
import { useStore }         from 'vuex';
import {
  defineComponent,
  computed
} from 'vue';

export default defineComponent({
  name: 'App',

  components: {
    IoApp,
    IoView,
    MainSidebar,
  },

  setup () {
    const store = useStore();
    
    return {
      profile: computed(() => store.getters['main/profile']),
    };
  }
});
</script>
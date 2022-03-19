<script setup lang="ts">
import { IoSnackbar } from 'io-library';
import { useStore }   from 'vuex';
import { computed }   from 'vue';

const store = useStore();
const snackbar = computed(() => store.getters['main/snackbar']);
const handleClose = () => {
  store.dispatch('main/clearSnackbar');
};
</script>

<template>
  <io-snackbar
    v-if="snackbar.show"
    class="snackbar"
    :color="snackbar.color"
    @close="handleClose"
  >
    {{ snackbar.message }}
  </io-snackbar>
</template>

<style lang="scss">
@import '@/assets/styles/components/snackbar.scss';
</style>
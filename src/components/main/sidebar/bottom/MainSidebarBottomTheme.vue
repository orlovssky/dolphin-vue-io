<script setup lang="ts">
import { ProfileModel } from '@/models/main';
import {
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { useI18n }  from 'vue-i18n';
import { useStore } from 'vuex';
import { computed } from 'vue';

const { t } = useI18n();
const store = useStore();

const profile = computed(() => {
  return store.getters['main/profile'] as ProfileModel;
});

const iconClassObject = computed(() => ({
  'mdi': true,
  'mdi-weather-sunny': profile.value.theme === 'light',
  'mdi-weather-night': profile.value.theme === 'dark',
}));

const changeTheme = () => {
  store.dispatch('main/setProfileProperty', {
    key: 'theme',
    value: profile.value.theme === 'light' ? 'dark' : 'light'
  });
};
</script>

<template>
  <io-list-item @click="changeTheme">
    <io-list-item-icon>
      <span
        :class="iconClassObject"
        style="font-size: 32px;"
      />
    </io-list-item-icon>
    <io-list-item-content>
      {{ t(`common.${profile.theme}`) }}
    </io-list-item-content>
  </io-list-item>
</template>
<script setup lang="ts">
import { MainIcon } from '@/components/main/icons';
import {
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { useI18n }  from 'vue-i18n';
import { computed } from 'vue';

const { t, locale } = useI18n();

const localeIcon = computed(() => {
  switch (locale.value) {
  case 'ru-RU':
    return 'CircleFlagRu';
  case 'en-US':
    return 'CircleFlagGb';
  case 'zh-CN':
    return 'CircleFlagCn';
  default:
    return '';
  }
});

const changeLocale = () => {
  switch (locale.value) {
  case 'ru-RU':
    locale.value = 'en-US';
    break;
  case 'en-US':
    locale.value = 'zh-CN';
    break;
  case 'zh-CN':
    locale.value = 'ru-RU';
    break;
  }
};
</script>

<template>
  <io-list-item @click="changeLocale">
    <io-list-item-icon>
      <main-icon
        :name="localeIcon"
        width="32px"
        height="32px"
      />
    </io-list-item-icon>
    <io-list-item-content>
      {{ t("common.currentLocale") }}
    </io-list-item-content>
  </io-list-item>
</template>
<script setup lang="ts">
import {
  IoList,
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { useI18n }   from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();

const signOut = () => {
  localStorage.removeItem('dolphin-api-token');
  router.push({ name: 'SignIn' }); 
};
</script>

<template>
  <io-list>
    <io-list-item>
      <io-list-item-icon>
        <span class="mdi mdi-home sidebar__mdi-icon" />
      </io-list-item-icon>
      <io-list-item-content>
        {{ t('auth.home') }}
      </io-list-item-content>
    </io-list-item>

    <io-list-item @click="signOut">
      <io-list-item-icon>
        <span class="mdi mdi-arrow-left-bold-box sidebar__mdi-icon" />
      </io-list-item-icon>
      <io-list-item-content>
        {{ t('auth.signOut') }}
      </io-list-item-content>
    </io-list-item>
  </io-list>
</template>
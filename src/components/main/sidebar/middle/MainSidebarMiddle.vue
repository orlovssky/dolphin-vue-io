<script setup lang="ts">
import {
  IoList,
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { useRouter } from 'vue-router';

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
        <span
          class="mdi mdi-home"
          style="font-size: 24px;"
        />
      </io-list-item-icon>
      <io-list-item-content>
        Home
      </io-list-item-content>
    </io-list-item>

    <io-list-item @click="signOut">
      <io-list-item-icon>
        <span
          class="mdi mdi-arrow-left-bold-box"
          style="font-size: 24px;"
        />
      </io-list-item-icon>
      <io-list-item-content>
        Log out
      </io-list-item-content>
    </io-list-item>
  </io-list>
</template>
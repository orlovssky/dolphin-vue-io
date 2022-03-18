<script setup lang="ts">
import { MainIcon } from '@/components/main/icons';
import {
  IoList,
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
</script>

<template>
  <io-list>
    <!-- ЛОГОТИП -->
    <io-list-item>
      <io-list-item-icon>
        <main-icon
          name="DolphinMainLogo"
          width="32px"
          height="32px"
        />
      </io-list-item-icon>
      <io-list-item-content>
        Dolphin
      </io-list-item-content>
    </io-list-item>
    <!-- ЛОГОТИП КОНЕЦ -->
  </io-list>
</template>
<template>
  <io-list>
    <io-list-item>
      <io-list-item-icon>
        <main-icon
          name="DolphinTiktokLogo"
          width="32px"
          height="32px"
        />
      </io-list-item-icon>
      <io-list-item-content>
        Dolphin
      </io-list-item-content>
    </io-list-item>
  </io-list>
</template>

<script lang="ts">
import { MainIcon } from '@/components/main/icons';
import {
  IoList,
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainSidebar',

  components: {
    MainIcon,
    IoList,
    IoListItem,
    IoListItemContent,
    IoListItemIcon
  },
});
</script>
<template>
  <io-list>
    <io-list-item @click="some = !some">
      <io-list-item-icon>
        <span class="mdi mdi-home" />
      </io-list-item-icon>
      <io-list-item-content>
        Home
      </io-list-item-content>
    </io-list-item>
  </io-list>
</template>

<script lang="ts">
import {
  IoList,
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainSidebar',

  components: {
    IoList,
    IoListItem,
    IoListItemContent,
    IoListItemIcon
  },

  setup () {
    const some = ref(false);
    
    return {
      some,
    };
  }
});
</script>
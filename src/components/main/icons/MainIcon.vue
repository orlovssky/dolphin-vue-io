<template>
  <component
    :is="name"
    :style="styles"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import * as icons          from './variants';

interface Props {
  name: string;
  width?: string;
  height?: string;
  color?: string;
}

export default defineComponent({
  name: 'MainIcon', 
  
  components: { ...icons },
  
  props: {
    name: {
      type: String,
      required: true,
      validator (value: string) {
        return Object.keys(icons).includes(value);
      }
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },

  setup(props: Props) {
    return {
      styles: {
        width: props.width,
        height: props.height,
        color: props.color
      }
    };
  }
});
</script>

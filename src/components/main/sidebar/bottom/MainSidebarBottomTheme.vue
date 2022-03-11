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

<script lang="ts">
import { ProfileModel } from '@/models/main';
import {
  IoListItem,
  IoListItemContent,
  IoListItemIcon
} from 'io-library';
import { useI18n }  from 'vue-i18n';
import { useStore } from 'vuex';
import { 
  defineComponent,
  computed,
  PropType,
  toRef 
} from 'vue';

interface Props {
  profile: ProfileModel;
}

export default defineComponent({
  name: 'MainSidebarBottomTheme',

  components: {
    IoListItem,
    IoListItemContent,
    IoListItemIcon,
  },

  props: {
    profile: {
      type: Object as PropType<ProfileModel>,
      required: true,
    }
  },

  setup (props: Props) {
    const { t } = useI18n();
    const store = useStore();
    const profile = toRef(props, 'profile'); // ДЛЯ РЕАКТИВНОЙ ДЕСТРУКТУРИЗАЦИИ

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
    
    return {
      t,
      iconClassObject,
      changeTheme,
    };
  }
});
</script>
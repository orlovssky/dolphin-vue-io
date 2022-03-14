<template>
  <div class="sign-in">
    <div class="sign-in__form">
      <io-text-field 
        v-model="email"
        :label="t('auth.email')"
      />
      <io-text-field
        v-model="password"
        :label="t('auth.password')"
        type="password"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { IoTextField }          from 'io-library';
import { useI18n }              from 'vue-i18n';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SignIn',

  components: {
    IoTextField
  },

  setup () {
    const { t } = useI18n();
    const password = ref('');
    const email = ref('');

    return {
      t,
      password,
      email
    };
  }
});
</script>

<style lang="scss">
@import '@/assets/styles/components/sign-in.scss';
</style>
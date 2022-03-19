<script setup lang="ts">
import { isRequired }            from '@/helpers/validation';
import { LoginFormModel }        from '@/models/auth';
import { signInUserApi }         from '@/services/auth';
import { IoTextField, IoButton } from 'io-library';
import { useForm }               from 'vee-validate';
import { useI18n }               from 'vue-i18n';
import { useRouter }             from 'vue-router';
import { useStore }              from 'vuex';
import { ref, watch, computed }  from 'vue';

const store = useStore();
const router = useRouter();
const { t } = useI18n();
const loading = ref(false);
const touched = ref(false);

const { values: form, errors, handleSubmit } = useForm<LoginFormModel>({
  validationSchema: {
    email: isRequired,
    password: isRequired
  },
});

watch(form, () => {
  if (touched.value) touched.value = false;
});

const showError = computed(() => {
  return {
    email: touched.value && !!errors.value.email,
    password: touched.value && !!errors.value.password
  };
});
    
const submit = handleSubmit(({ email, password }) => {
  loading.value = true;
      
  signInUserApi({
    username: email,
    password,
  })
    .then(({ data }) => {
      if (data.data?.access_token) {
        localStorage.setItem('dolphin-api-token', data.data.access_token);
        loading.value = false;
        router.push({ name: 'Main' }); 

        store.dispatch('main/setSnackbar', {
          show: true,
          color: 'success',
          message: 'Success'
        });
      }
    })
    .catch(() => {
      loading.value = false;
      store.dispatch('main/setSnackbar', {
        show: true,
        color: 'error',
        message: 'Error'
      });
    });
});

const onSignIn = async () => {
  await submit();
  touched.value = true;
};
</script>

<template>
  <div class="sign-in">
    <div class="sign-in__form">
      <!-- ПОЧТА -->
      <div class="sign-in__item">
        <io-text-field 
          v-model="form.email"
          name="email"
          :label="t('auth.email')"
          :error="showError.email"
        />
        <span v-if="showError.email">{{ t(`${errors.email}`) }}</span>
      </div>
      <!-- ПОЧТА КОНЕЦ -->

      <!-- ПАРОЛЬ -->

      <div class="sign-in__item">
        <io-text-field
          v-model="form.password"
          name="password"
          :label="t('auth.password')"
          type="password"
          :error="showError.password"
        />
        <span v-if="showError.password">{{ t(`${errors.password}`) }}</span>
      </div>
      <!-- ПАРОЛЬ КОНЕЦ -->

      <!-- ВОЙТИ -->
      <io-button
        :loading="loading"
        @click="onSignIn"
      >
        {{ t('auth.signIn') }}
      </io-button>
      <!-- ВОЙТИ КОНЕЦ -->
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/sign-in.scss';
</style>
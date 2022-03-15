<template>
  <div class="sign-in">
    <div class="sign-in__form">
      <!-- ПОЧТА -->
      <div class="sign-in__item">
        <io-text-field 
          v-model="form.email"
          name="email"
          :label="t('auth.email')"
          :error="touched && !!errors.email"
        />
        <span v-if="touched && !!errors.email">{{ errors.email }}</span>
      </div>
      <!-- ПОЧТА КОНЕЦ -->

      <!-- ПАРОЛЬ -->

      <div class="sign-in__item">
        <io-text-field
          v-model="form.password"
          name="password"
          :label="t('auth.password')"
          type="password"
          :error="touched && !!errors.password"
        />
        <span v-if="touched && !!errors.password">{{ errors.password }}</span>
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

<script lang="ts">
import { signInUserApi }         from '@/services/auth';
import { IoTextField, IoButton } from 'io-library';
import { useForm }               from 'vee-validate';
import { useI18n }               from 'vue-i18n';
import { useRouter }             from 'vue-router';
import { 
  defineComponent,
  ref,
  watch,
} from 'vue';

interface LoginForm {
  email: string;
  password: string;
}

export default defineComponent({
  name: 'SignIn',

  components: {
    IoTextField,
    IoButton,
  },

  setup () {
    const router = useRouter();
    const { t, locale } = useI18n();

    const loading = ref(false);
    const touched = ref(false);

    const isRequired = (value: string) => (value ? true : t('validation.fieldIsRequired'));

    const { values: form, errors, handleSubmit, validate } = useForm<LoginForm>({
      validationSchema: {
        email: isRequired,
        password: isRequired,
      },
      initialValues: {
        email: '',
        password: '',
      },
    });

    watch(form, () => {
      if (touched.value) {
        touched.value = false;
      }
    });
    
    watch(locale, () => {
      validate();
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
          }
        })
        .catch(() => {
          loading.value = false;
        });
    });

    const onSignIn = async () => {
      await submit();
      touched.value = true;
    };

    return {
      touched,
      loading,
      t,
      form,
      errors,
      onSignIn,
    };

  }
});
</script>

<style lang="scss">
@import '@/assets/styles/components/sign-in.scss';
</style>
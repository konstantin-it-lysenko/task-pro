import * as yup from 'yup';
import i18next from 'i18next';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(
      3,
      i18next.language === 'en'
        ? 'Name must be at least 3 characters'
        : 'Мінімальна довжина імені - 3 символи'
    )
    .max(
      25,
      i18next.language === 'en'
        ? 'Maximum name length is 25 symbols'
        : 'Максимальна довжина імені - 25 символів'
    )
    .required(
      i18next.language === 'en' ? 'Name is required' : 'Імʼя обовʼязкове'
    ),
  email: yup
    .string()
    .email(
      i18next.language === 'en'
        ? 'Invalid email format'
        : 'Невалідна поштова адреса'
    )
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      i18next.language === 'en'
        ? 'Invalid email format'
        : 'Невалідна поштова адреса'
    )
    .required(
      i18next.language === 'en'
        ? 'Email is required'
        : 'Поштова адреса обовʼязкова'
    ),
  password: yup
    .string()
    .min(
      6,
      i18next.language === 'en'
        ? 'Password must be at least 6 characters'
        : 'Мінімальна довжина паролю - 6 символів'
    )
    .max(
      24,
      i18next.language === 'en'
        ? 'Maximum password length is 24 symbols'
        : 'Максимальна довжина паролю - 24 символи'
    )
    .required(
      i18next.language === 'en' ? 'Password is required' : 'Пароль обовʼязковий'
    ),
});

export default registerSchema;

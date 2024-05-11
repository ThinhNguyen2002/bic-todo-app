import * as yup from 'yup';

export const validateUserLoginForm = yup.object({
  email: yup
    .string()
    .email('validateMessage.invalidEmail')
    .required('validateMessage.required'),
  password: yup.string().required('validateMessage.required'),
});

import * as yup from 'yup';

export const validateUserLoginForm = yup.object({
  email: yup
    .string()
    .email('validateMessage.invalidEmail')
    .required('validateMessage.required'),
  password: yup.string().required('validateMessage.required'),
});

export const validateUserSignUpForm = yup.object().shape({
  email: yup
    .string()
    .email('validateMessage.invalidEmail')
    .required('validateMessage.required'),
  fullName: yup.string().required('validateMessage.required'),
  username: yup.string().required('validateMessage.required'),
  checkbox: yup.boolean().oneOf([true]),
});

export const validateAddNewTaskForm = yup.object({
  title: yup.string().required('validateMessage.required'),
  note: yup.string(),
  isImportance: yup.boolean().required('validateMessage.required'),
});

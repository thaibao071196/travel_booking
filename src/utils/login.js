import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(5)
    .max(20)
    .required('Please enter your name !')
    .matches(/^[aA-zZ\s]+$/, 'There must be no numbers in the name'),
  email: yup.string().email().required('Please enter your email !'),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required('Please enter your password !')
    .matches(
      '(?=.*[0-9])(?=.*?[A-Z])',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case CharacterPassword should include at least one uppercase, one numeric value !',
    ),
});

import * as yup from 'yup';

const validationSchemaStepOne = yup.object().shape({
  nickname: yup
    .string()
    .required('Nickname обязательное поле')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Разрешается использовать только буквы и цифры')
    .max(30, 'Максимально 30 символов'),
  name: yup
    .string()
    .required('Name обязательное поле')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Разрешается использовать только буквы')
    .max(50, 'Максимально 50 символов'),
  surname: yup
    .string()
    .required('Surname обязательное поле')
    .matches(/^[a-zA-Zа-яА-Я]+$/, 'Разрешается использовать только буквы')
    .max(50, 'Максимально 50 символов'),
  sex: yup
    .string()
    .required('Пожалуйста, выберите пол')
    .oneOf(['man', 'woman'], 'Пожалуйста выберите пол')
});

const validationSchemaStepTwo = yup.object().shape({
  advantages: yup
    .array()
    .of(
      yup.object().shape({
        value: yup
          .string()
          .required("Обязательное поле")
          .matches(/^[a-zA-Zа-яА-Я]+$/, 'Разрешается использовать только буквы'),
      })
    )
    .required("Must have fields")
    .min(1, "Минимум одно поле должно быть заполнено"),
  radio: yup
    .string()
    .required('Please select an option'),
  checkbox: yup
    .array()
    .of(yup.number().required())
});

const noSpacesLength = (value: string, max: number) =>
  value.replace(/\s/g, '').length <= max;

const validationSchemaStepThree = yup.object().shape({
  ...validationSchemaStepOne.fields,
  ...validationSchemaStepTwo.fields,
  about: yup
    .string()
    .required('Это обязательное поле')
    .test(
      'maxWithoutSpaces',
      'Максимум 200 символов без учета пробелов',
      (value) => noSpacesLength(value || '', 200)
    )
});

export const validationSchema = [validationSchemaStepOne, validationSchemaStepTwo, validationSchemaStepThree];
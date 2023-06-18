import React from 'react';
import { InputField } from './InputField';
import { SelectField } from './SelectField';

export const StepOne: React.FC = () => {
  return (
    <>
      <InputField id="field-nickname" name="nickname" label="Nickname" />
      <InputField id="field-name" name="name" label="Name" />
      <InputField id="field-surname" name="surname" label="Surname" />
      <SelectField
        id="field-sex"
        name="sex"
        options={[
          { value: 'man', label: 'man', optionId: 'field-sex-option-man' },
          {
            value: 'woman',
            label: 'woman',
            optionId: 'field-sex-option-woman',
          },
        ]}
      />
    </>
  );
};

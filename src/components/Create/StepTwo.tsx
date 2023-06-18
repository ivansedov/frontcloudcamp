import { AdvantagesList } from './Advantages/AdvantagesList';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';
import RadioGroup from './RadioGroup/RadioGroup';

export const StepTwo: React.FC = () => {
  return (
    <>
      <AdvantagesList />
      <CheckboxGroup />
      <RadioGroup />
    </>
  );
};

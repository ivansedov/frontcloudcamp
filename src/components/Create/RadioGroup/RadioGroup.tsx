import { RadioItem } from './RadioItem';
import './RadioGroup.scss';

const RadioGroup: React.FC = () => {
  return (
    <>
      <fieldset className="form__radio-group">
        <div className="form__radio-group-title">Radio group</div>
        <RadioItem
          name="radio"
          id="field-radio-group-option-1"
          label="1"
        />
        <RadioItem
          name="radio"
          id="field-radio-group-option-2"
          label="2"
        />
        <RadioItem
          name="radio"
          id="field-radio-group-option-3"
          label="3"
        />
      </fieldset>
    </>
  );
};

export default RadioGroup;

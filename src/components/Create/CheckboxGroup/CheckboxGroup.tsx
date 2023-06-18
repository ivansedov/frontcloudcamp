import { CheckboxItem } from './CheckboxItem';
import './CheckboxGroup.scss';

const CheckboxGroup: React.FC = () => {
  return (
    <>
      <fieldset className="form__checkbox-group">
        <div className="form__checkbox-group-title">Checkbox group</div>
        <CheckboxItem
          name="checkbox"
          id="field-checkbox-group-option-1"
          label="1"
        />
        <CheckboxItem
          name="checkbox"
          id="field-checkbox-group-option-2"
          label="2"
        />
        <CheckboxItem
          name="checkbox"
          id="field-checkbox-group-option-3"
          label="3"
        />
      </fieldset>
    </>
  );
};

export default CheckboxGroup;

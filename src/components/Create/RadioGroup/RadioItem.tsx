import { useFormContext } from 'react-hook-form';
import './RadioItem.scss';

interface RadioItemProps {
  name: string;
  id: string;
  label: string;
}

export const RadioItem: React.FC<RadioItemProps> = ({
  name,
  id,
  label,
}) => {
  const { register } = useFormContext();
  return (
    <label className="form__radio-label">
      <input
        className="form__radio"
        {...register(name)}
        type="radio"
        id={id}
        value={label}
      />
      <span className="form__radio-custom"></span>
      <span className="form__radio-value">{label}</span>
    </label>
  );
};

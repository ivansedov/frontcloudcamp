import { useFormContext } from 'react-hook-form';
import './CheckboxItem.scss';

interface CheckboxItemProps {
  name: string;
  id: string;
  label: string;
}

export const CheckboxItem: React.FC<CheckboxItemProps> = ({
  name,
  id,
  label,
}) => {
  const { register } = useFormContext();
  return (
    <label className="form__checkbox-label">
      <input
        className="form__checkbox"
        {...register(name)}
        type="checkbox"
        id={id}
        value={label}
      />
      <span className="form__checkbox-custom"></span>
      <span className="form__checkbox-value">{label}</span>
    </label>
  );
};

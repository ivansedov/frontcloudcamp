import { useFormContext } from 'react-hook-form';
import { useFieldError } from '../../hooks/useFieldError';

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
}) => {

  const { register } = useFormContext();
  const { error, inputClass } = useFieldError(name);

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`form__input form__input_size_l ${inputClass}`}
        {...register(name)}
        id={id}
        placeholder={placeholder || 'Placeholder'}
      />
      <p className="form__warning">
        {error ? error.message?.toString() : 'Tip'}
      </p>
    </div>
  );
};

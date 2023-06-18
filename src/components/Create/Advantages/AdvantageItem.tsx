import React from 'react';
import './AdvantagesItem.scss';

interface AdvantageItemProps {
  field: any;
  index: number;
  register: any;
  errors: any;
  remove: (index?: number | number[] | undefined) => void;
  isSubmitted: boolean;
  watch: any;
}

export const AdvantageItem: React.FC<AdvantageItemProps> = ({
  field,
  index,
  register,
  errors,
  remove,
  watch,
  isSubmitted,
}) => {
  const fieldValue = watch(`advantages.${index}.value`);

  const error =
    errors.advantages &&
    Array.isArray(errors.advantages) &&
    errors.advantages[index];

  const isTouched = isSubmitted || error;
  const isEmpty = fieldValue === '';

  const inputClass = error ? 'invalid' : isTouched && !isEmpty ? 'valid' : '';

  return (
    <li className="form__advantages-item" key={field.id}>
      <div className="form__advantages-row">
        <input
          className={`form__advantages-input form__input form__input_size_l ${inputClass}`}
          placeholder="Placeholder"
          id={`field-advantages-${index + 1}`}
          key={field.id}
          {...register(`advantages.${index}.value`)}
        />

        <button
          className="form__advantages-item-remove"
          id={`button-remove-${index + 1}`}
          type="button"
          onClick={() => remove(index)}
        ></button>
      </div>
      {error && (
        <p className="form__advantages-error form__warning">
          {error?.value?.message}
        </p>
      )}
    </li>
  );
};

import { useFormContext, useFieldArray } from 'react-hook-form';
import { AdvantageItem } from './AdvantageItem';
import './AdvantagesList.scss';

export const AdvantagesList: React.FC = () => {
  const {
    register,
    control,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'advantages',
  });

  return (
    <>
      <ul className="form__advantages">
        <span className="form__advantages-title">Advantages</span>
        {fields.length === 0 && (
          <p className="form__warning">Минимум одно поле должно быть заполнено</p>
        )}
        {fields.map((field, index: number) => (
          <AdvantageItem
            key={field.id}
            field={field}
            index={index}
            register={register}
            errors={errors}
            remove={remove}
            isSubmitted={isSubmitted}
          />
        ))}
        <button
          className="form__advantages-add-button"
          type="button"
          id="button-add"
          onClick={() => append({ value: '' })}
        ></button>
      </ul>
    </>
  );
};

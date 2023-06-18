import { Controller, useFormContext } from 'react-hook-form';
import Select, {
  components,
  OptionProps,
  DropdownIndicatorProps,
} from 'react-select';
import { useFieldError } from '../../hooks/useFieldError';
import iconSelectIndicator from '../../assets/img/icons/select-indicator.svg';
interface SelectFieldProps {
  id: string;
  name: string;
  options: { value: string; label: string; optionId: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  options,
}) => {
  const { control } = useFormContext();
  const { error, inputClass: selectClass } = useFieldError(name);

  const Option: React.FC<
    OptionProps<{ value: string; label: string; optionId: string }, false>
  > = (props) => (
    <div id={props.data.optionId}>
      <components.Option {...props} />
    </div>
  );

  const DropdownIndicator: React.FC<
    DropdownIndicatorProps<
      { value: string; label: string; optionId: string },
      false
    >
  > = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={iconSelectIndicator} alt="Иконка индикатора" />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            inputId={id}
            isSearchable={false}
            placeholder={'Не выбрано'}
            onChange={(option) => field.onChange(option?.value)}
            value={options.find((option) => option.value === field.value)}
            className={`form__select form__select_size_l ${selectClass}`}
            classNamePrefix="form-select"
            components={{
              DropdownIndicator,
              Option,
              IndicatorSeparator: null,
            }}
          />
        )}
      />
      {error && <p className="form__warning">{error.message?.toString()}</p>}
    </div>
  );
};

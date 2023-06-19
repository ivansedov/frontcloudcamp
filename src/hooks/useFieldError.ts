import { useFormContext } from 'react-hook-form';

export function useFieldError(name: string) {
  const {
    formState: { errors, touchedFields },
    getValues
  } = useFormContext();

  const error = errors[name];
  const isTouched = touchedFields[name];
  const isEmpty = !getValues(name);
  const inputClass = error ? 'invalid' : isTouched && !isEmpty ? 'valid' : '';

  return { error, inputClass };
}
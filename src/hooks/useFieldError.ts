import { useFormContext } from 'react-hook-form';

export function useFieldError(name: string) {
  const {
    formState: { errors, isSubmitted },
    getValues
  } = useFormContext();

  const error = errors[name];
  const isTouched = isSubmitted || error;
  const isEmpty = !getValues(name);
  const inputClass = error ? 'invalid' : isEmpty ? '' : isTouched ? 'valid' : '';

  return { error, inputClass };
}
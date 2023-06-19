import React, { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import './AboutTextArea.scss';
import { useFieldError } from '../../../hooks/useFieldError';

export const AboutTextArea: React.FC = () => {
  const {
    control,
    watch,
    setValue,
    formState: { touchedFields },
  } = useFormContext();
  const { error, inputClass: textAreaClass } = useFieldError('about');

  const aboutValue = watch('about');
  const charCount = aboutValue ? aboutValue.replace(/\s/g, '').length : 0;

  const handleBlur = () => {
    if (!touchedFields.about) {
      setValue('about', aboutValue, { shouldTouch: true });
    }
  };

  useEffect(() => {
    setValue('about', aboutValue, { shouldTouch: true });
  }, [aboutValue, setValue]);

  return (
    <div className="form__field">
      <label className="form__label" htmlFor="field-about">
        About
      </label>
      <div className="form__textarea-wrapper">
        <Controller
          name="about"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <textarea
              className={`form__textarea ${textAreaClass}`}
              id="field-about"
              rows={4}
              value={field.value}
              placeholder="Placeholder"
              onChange={field.onChange}
              onBlur={handleBlur}
            />
          )}
        />
        <div className="form__textarea-counter">{charCount}/200</div>
      </div>
      <div className="form__warning">
        {error ? error.message?.toString() : 'Tip'}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import './AboutTextArea.scss';
import { useFieldError } from '../../../hooks/useFieldError';

export const AboutTextArea: React.FC = () => {
  const [charCount, setCharCount] = useState(0);
  const { control, watch } = useFormContext();
  const { error, inputClass: textAreaClass } = useFieldError('about');

  const aboutValue = watch('about');

  useEffect(() => {
    setCharCount(aboutValue ? aboutValue.replace(/\s/g, '').length : 0);
  }, [aboutValue]);

  const handleInputChange = (value: string) => {
    setCharCount(value.replace(/\s/g, '').length);
  };

  return (
    <div className="form__field">
      <label className="form__label" htmlFor="about">
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
              onChange={(e) => {
                field.onChange(e);
                handleInputChange(e.target.value);
              }}
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

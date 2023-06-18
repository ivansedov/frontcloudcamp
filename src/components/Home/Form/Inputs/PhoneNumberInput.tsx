import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFormData,
  setIsPhoneValid,
  RootState,
} from '../../../../redux/slices/formSlice';
import MaskedInput from 'react-text-mask';

const PhoneNumberInput: React.FC = () => {
  const phone = useSelector((state: RootState) => state.form.formData.phone);
  const isPhoneValid = useSelector(
    (state: RootState) => state.form.isPhoneValid,
  );
  const dispatch = useDispatch();

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const regex = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
    dispatch(setIsPhoneValid(regex.test(phone)));
  }, [phone, dispatch]);

  const handleChange = (event) => {
    dispatch(setFormData({ phone: event.target.value }));
  };

  const toggleInput = () => {
    setIsEnabled(!isEnabled);
  };

  const inputClass = !isPhoneValid ? 'invalid' : '';

  return (
    <div className="form__field">
      <label className="form__label" htmlFor="phone">
        Номер телефона
      </label>
      <MaskedInput
        className={`form__input form__input_size_l ${inputClass}`}
        type="tel"
        id="phone"
        mask={[
          '+',
          '7',
          ' ',
          '(',
          /\d/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ]}
        value={phone}
        onChange={handleChange}
        disabled={!isEnabled}
      />
      {!isPhoneValid && (
        <p className="form__warning">Номер телефона введен не корректно</p>
      )}
      <button
        className={`form__btn-toggle ${!isEnabled ? 'active' : ''}`}
        type="button"
        onClick={toggleInput}
      >
        <img
          className="form__btn-toggle-icon"
          src="/src/assets/img/icons/disable-eye-inactive.svg"
          alt="Иконка для отключения/включения редактирования поля"
          title={isEnabled ? 'Отключить' : 'Включить'}
        />
      </button>
    </div>
  );
};

export default PhoneNumberInput;

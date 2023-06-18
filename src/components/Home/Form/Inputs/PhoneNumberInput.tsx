import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFormData,
  setIsPhoneValid,
  RootState,
} from '../../../../redux/slices/formSlice';
import MaskedInput from 'react-text-mask';
import iconDisabled from '../../../../assets/img/icons/disable-eye-inactive.svg';

const PhoneNumberInput: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.formData);
  const isPhoneValid = useSelector(
    (state: RootState) => state.form.isPhoneValid,
  );
  const dispatch = useDispatch();

  const { phone } = formData;
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const regex = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
    dispatch(setIsPhoneValid(regex.test(phone)));
  }, [phone, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ ...formData, phone: event.target.value }));
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
          src={iconDisabled}
          alt="Иконка для отключения/включения редактирования поля"
          title={isEnabled ? 'Отключить' : 'Включить'}
        />
      </button>
    </div>
  );
};

export default PhoneNumberInput;

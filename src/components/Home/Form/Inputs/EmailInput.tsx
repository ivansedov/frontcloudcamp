import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFormData,
  setIsEmailValid,
  RootState,
} from '../../../../redux/slices/formSlice';
import iconDisabled from '../../../../assets/img/icons/disable-eye-inactive.svg';

const EmailInput: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.formData);
  const isEmailValid = useSelector(
    (state: RootState) => state.form.isEmailValid,
  );
  const dispatch = useDispatch();

  const { email } = formData;
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    dispatch(setIsEmailValid(email !== '' && regex.test(email)));
  }, [email, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ ...formData, email: event.target.value }));
  };

  const toggleInput = () => {
    setIsEnabled(!isEnabled);
  };

  const inputClass = !isEmailValid ? 'invalid' : '';
  return (
    <div className="form__field">
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className={`form__input form__input_size_l ${inputClass}`}
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        disabled={!isEnabled}
      />
      {!isEmailValid && (
        <p className="form__warning">Email введен некорректно</p>
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

export default EmailInput;

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PhoneNumberInput from './Inputs/PhoneNumberInput';
import EmailInput from './Inputs/EmailInput';
import { RootState } from '../../../redux/slices/formSlice';
import './Form.scss';

const Form: React.FC = () => {
  const isEmailValid = useSelector(
    (state: RootState) => state.form.isEmailValid,
  );
  const isPhoneValid = useSelector(
    (state: RootState) => state.form.isPhoneValid,
  );

  return (
    <form className="form home__form">
      <PhoneNumberInput />
      <EmailInput />
      <Link
        className={`btn-default home__form-btn ${
          !(isEmailValid && isPhoneValid) ? 'disabled' : ''
        }`}
        to={isEmailValid && isPhoneValid ? '/create' : '#'}
        id="button-start"
      >
        Начать
      </Link>
    </form>
  );
};

export default Form;

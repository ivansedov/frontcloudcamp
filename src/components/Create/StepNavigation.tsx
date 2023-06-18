import { Link } from 'react-router-dom';

export const StepNavigation = ({
  step,
  onPrev,
  isLoading,
}: {
  step: number;
  onPrev: () => void;
  isLoading: boolean;
}) => (
  <div className="form__nav">
    {step === 1 && (
      <Link className="btn-outline" to="/" id="button-back">
        Назад
      </Link>
    )}
    {step > 1 && (
      <button
        className="btn-outline"
        type="button"
        onClick={onPrev}
        id="button-back"
      >
        Назад
      </button>
    )}
    <button
      className="btn-default"
      type="submit"
      id={step < 3 ? 'button-next' : 'button-send'}
    >
      {step < 3 ? 'Далее' : isLoading ? 'Отправляем...' : 'Отправить'}
    </button>
  </div>
);

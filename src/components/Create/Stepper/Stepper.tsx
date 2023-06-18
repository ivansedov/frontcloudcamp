import './Stepper.scss';

interface StepperProps {
  currentStep: number;
}

const getStepClass = (step: number, currentStep: number): string => {
  return step < currentStep
    ? 'stepper__step--completed'
    : step === currentStep
    ? 'stepper__step--current'
    : '';
};

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const totalSteps = 3;
  const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="stepper">
      <div className="stepper__progress" style={{ width: `${percentage}%` }} />
      <div className="stepper__steps">
        {[...Array(totalSteps)].map((_, i) => (
          <div
            key={i}
            className={`stepper__step ${getStepClass(i + 1, currentStep)}`}
            style={{ left: `${(i * 100) / (totalSteps - 1)}%` }}
          >
            <div className="stepper__step-round"></div>
            <div className="stepper__step-number">{i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

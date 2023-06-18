import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../validationSchemas/validationSchema';
import { nextStep, prevStep } from '../../redux/slices/formSlice';
import { RootState } from '../../redux/store';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { Stepper } from './Stepper/Stepper';
import { cloudAPI } from '../../services/api';
import { StepNavigation } from './StepNavigation';
import SuccessModal from './Modals/SuccessModal/SuccessModal';
import ErrorModal from './Modals/ErrorModal/ErrorModal';
import { ObjectSchema } from 'yup';

export const FormStepper: React.FC = () => {
  const dispatch = useDispatch();
  const [postForm, { isLoading }] = cloudAPI.usePostFormMutation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const steps = [<StepOne />, <StepTwo />, <StepThree />];
  const step = useSelector((state: RootState) => state.form.step);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const currentValidationShema: ObjectSchema<any> = validationSchema[step - 1];
  const initialState = useSelector((state: RootState) => state.form.formData);

  const methods = useForm({
    mode: 'onChange',
    defaultValues: initialState,
    resolver: yupResolver(currentValidationShema),
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit = async (data: any) => {
    const isStepValid = await trigger();

    if (isStepValid && step < 3) {
      dispatch(nextStep());
    } else if (isStepValid && step === 3) {
      const transformedData = {
        ...data,
        advantages: data.advantages.map(
          (advantage: { value: string }) => advantage.value,
        ),
        radio: Number(data.radio),
      };

      postForm(transformedData)
        .unwrap()
        .then((payload: any) => {
          if (payload.status === 'success') {
            setShowSuccessModal(true);
          } else {
            setShowErrorModal(true);
          }
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    if (showSuccessModal || showErrorModal) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [showSuccessModal, showErrorModal]);

  return (
    <FormProvider {...methods}>
      <div className="create__inner">
        <Stepper currentStep={step} />
        <form className="create__form form" onSubmit={handleSubmit(onSubmit)}>
          {steps[step - 1]}
          <StepNavigation
            step={step}
            onPrev={() => dispatch(prevStep())}
            isLoading={isLoading}
          />
        </form>

        {showSuccessModal && (
          <SuccessModal onClose={() => setShowSuccessModal(false)} />
        )}

        {showErrorModal && (
          <ErrorModal onClose={() => setShowErrorModal(false)} />
        )}
      </div>
    </FormProvider>
  );
};

import { FormStepper } from './FormStepper';
import './Create.scss';

export const Create: React.FC = () => {
  return (
    <section className="create">
      <div className="container">
        <div className="create__box box">
          <FormStepper />
        </div>
      </div>
    </section>
  );
};

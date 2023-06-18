import Header from './Header/Header';
import Form from './Form/Form';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__box box">
          <Header />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Home;
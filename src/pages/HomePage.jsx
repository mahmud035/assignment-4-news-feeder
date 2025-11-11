import { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import NewsContainer from '../components/news/NewsContainer';
import ErrorMessage from '../components/ui/ErrorMessage';
import Loading from '../components/ui/Loading';
import { NewsContext } from '../contexts/NewsContext';

const HomePage = () => {
  const { isLoading, isError } = useContext(NewsContext);

  return (
    <>
      <Header />

      <main className="py-10 transition-all lg:py-14">
        {isError && <ErrorMessage />}

        {isLoading ? <Loading /> : <NewsContainer />}
      </main>

      <Footer />
    </>
  );
};

export default HomePage;

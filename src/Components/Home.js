import React from 'react';
import styles from './Home.module.css';
import Feed from './Feed/Feed';
import Loading from '../Helper/Loading';
import Head from '../Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer ">
      <Head title="Fotos" description="Home site Dogs" />
      <Feed />
    </section>
  );
};

export default Home;

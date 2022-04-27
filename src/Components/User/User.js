import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader.js';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost.js';
import UserStats from './UserStats.js';
import { UserContext } from '../../UserContext.js';
import NotFound from '../NotFound.js';
import Head from '../../Helper/Head.js';
const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="conta/estatisticas" element={<UserStats />} />
        <Route path="conta/postar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;

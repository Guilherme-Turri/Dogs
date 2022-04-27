import React from 'react';
import UserHeaderNav from './UserHeaderNav.js';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation(); //hook from React Router Dom   ;

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta/conta/postar':
        setTitle('Poste sua Foto ');
        break;
      case '/conta/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title} </h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;

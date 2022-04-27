import React from 'react';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Erro from '../../Helper/Erro';
import Head from '../../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Perdeu a Senha" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p>Email enviado</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuario" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled> Enviando</Button>
          ) : (
            <Button> Enviar email. </Button>
          )}
        </form>
      )}

      <Erro error={error} />
    </section>
  );
};

export default LoginPasswordLost;

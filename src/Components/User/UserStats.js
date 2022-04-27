import React from 'react';
import { GET_STATS } from '../../api';
import Erro from '../../Helper/Erro';
import Head from '../../Helper/Head';
import Loading from '../../Helper/Loading';
import useFetch from '../../Hooks/useFetch';

const UserStatsGraph = React.lazy(() => import('./UserStatsGraph'));
const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Erro error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;

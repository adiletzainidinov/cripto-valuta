import { Layout, Spin } from 'antd';
import AppHeader from './Layout/AppHeader';
import AppSider from './Layout/AppSider';
import AppContent from './Layout/AppContent';
import { useContext } from 'react';
import CryptoContext from '../context/crypto-context';

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}

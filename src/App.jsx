import './App.css';
import AppLayout from './components/AppLayout';
import { CryptoContextProvider } from './context/crypto-context';

function App() {
  return (
    <>
      <CryptoContextProvider>
        <AppLayout />
      </CryptoContextProvider>
    </>
  );
}

export default App;

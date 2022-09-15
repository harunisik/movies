import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import MainScreen from './pages/MainScreen';
import SecondScreen from './pages/SecondScreen';
import ThirdScreen from './pages/ThirdScreen';

function App() {
  return (
    <Router>
      <Layout>
        <MainScreen />
        <SecondScreen />
        <ThirdScreen />
      </Layout>
    </Router>
  );
}

export default App;

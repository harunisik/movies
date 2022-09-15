import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div>body</div>
      </Layout>
    </Router>
  );
}

export default App;

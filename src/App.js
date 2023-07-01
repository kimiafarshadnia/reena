import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Search from './views/Search';
import { ContextWrapper } from './store/AppContext';

function App() {
  return (
    <ContextWrapper>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </ContextWrapper>
  );
}

export default App;

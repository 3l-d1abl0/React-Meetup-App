import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

import Layout from './components/layout/Layout';
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} exact={true}>
          </Route>
          <Route path='/new-meetup' element={<NewMeetupPage />}>
          </Route>
          <Route path='/favorites' element={<FavoritePage />}>
          </Route>
        </Routes>
      </Layout>

    </div>
  );
}

export default App;

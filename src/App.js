import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritePage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

import MainNaviagation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
        <MainNaviagation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} exact={true}>
        </Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}>
        </Route>
        <Route path='/favorites' element={<FavoritePage />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

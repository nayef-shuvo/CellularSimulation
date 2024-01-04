import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GameOfLife from './components/GameOfLife';
import WelcomePage from './components/Welcome';
import Pages from './utils/pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path= {Pages.WELCOME_PAGE} element={<WelcomePage />} />
                <Route path= {Pages.GAME_OF_LIFE} element={<GameOfLife />} />
            </Routes>
        </Router>
    );
}

export default App;


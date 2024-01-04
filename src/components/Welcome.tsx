import { useNavigate } from 'react-router-dom';
import Pages from '../utils/pages';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to my app!</h1>
            <button onClick={() => navigate(Pages.GAME_OF_LIFE)}>Game of Life</button>
        </div>
    );
}

export default WelcomePage;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header>
            <div className="container">
                <h1>🏟️ Spot The Sport</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/credits">Credits</Link></li>
                        <li><Link to="/locations">Location</Link></li>
                        <li className="nav-item">Dark mode:</li>
                        <li className="nav-item">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isDarkMode}
                                    onChange={handleToggle}
                                />
                                <span className="slider"></span>
                            </label>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

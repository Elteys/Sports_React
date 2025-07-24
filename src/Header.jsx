import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const darkMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode){
            document.body.classList.add('dark-mode');
        }
    }, []);

    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
        document.body.classList.toggle('dark-mode');
    };
    return(
        <header>
			<div class="container">
				<h1>🏟️ Spot The Sport</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/">Credits</Link></li>
						<li><Link to="/">Location</Link></li>
						<li><Link to="/">DOG API</Link></li>
                        <li class="nav-item"><Link to="#">Dark mode:</Link></li>
                        <li class="nav-item"><label class="switch"><input type="checkbox" id="theme-toggle" checked={isDarkMode} onChange={handleToggle}/><span class="slider"></span></label></li>
					</ul>
				</nav>
			</div>
		</header>
    )
}


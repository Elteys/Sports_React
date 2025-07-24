import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
<<<<<<< HEAD
    const [isDarkMode, setIsDarkMode] = useState(false)
=======
   /* const [isDarkMode, setIsDarkMode] = useState(false)
>>>>>>> dfbd8492adf328ed025a7e6f4cfdf7af0cb12f0c

    useEffect(() => {
        const darkMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(darkMode);
        if (darkMode){
            document.body.classNameList.add('dark-mode');
        }
    }, []);

    const handleToggle = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('dark-mode', newMode);
<<<<<<< HEAD
        document.body.classNameList.toggle('dark-mode');
    };
=======
        document.body.classList.toggle('dark-mode');
    }; */
>>>>>>> dfbd8492adf328ed025a7e6f4cfdf7af0cb12f0c
    return(
        <header>
			<div className="container">
				<h1>🏟️ Spot The Sport</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/">Credits</Link></li>
						<li><Link to="/">Location</Link></li>
						<li><Link to="/">DOG API</Link></li>
                        <li className="nav-item">Dark mode:</li>
                        <li className="nav-item"><label className="switch"><input type="checkbox" id="theme-toggle" checked={isDarkMode} onChange={handleToggle}/><span className="slider"></span></label></li>
					</ul>
				</nav>
			</div>
		</header>
    )
}


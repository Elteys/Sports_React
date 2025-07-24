import { useState } from 'react'
function App() {
	const toggle = document.getElementById('theme-toggle');

	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.add('dark-mode');
	toggle.checked = true;
		}

		toggle.addEventListener('change', () => {
		document.body.classList.toggle('dark-mode');
	localStorage.setItem(
	'dark-mode',
	document.body.classList.contains('dark-mode')
	);
		});

	return (
		<>

			<main class="credits-main">
				<div class="credits-row">
					<div class="credits-container">
						<img src="images/Remek.jpg" alt="Remy" />
						<h3>Remek Szabłowski</h3>
						<p>Amazing Personality</p>
					</div>
					<div class="credits-container">
						<img src="images/Max.jpg" alt="Max" />
						<h3>Max Wyżykowski</h3>
						<p>Best Rizz</p>
					</div>
					<div class="credits-container">
						<img src="images/Alex.jpg" alt="Alex" />
						<h3>Alex Łysakowski</h3>
						<p>Just Cool Guy</p>
					</div>
				</div>
				<div class="credits-row2">
					<div class="credits-container">
						<img src="images/Oli.png" alt="Oliver" />
						<h3>Oliver Kołacki</h3>
						<p>Awesome Person</p>
					</div>
					<div class="credits-container">
						<img src="images/Ostry.jpg" alt="Sharpee" />
						<h3>Mateusz Ostrowski</h3>
						<p>The Best One</p>
					</div>
				</div>
			</main>
		</>
	)
}


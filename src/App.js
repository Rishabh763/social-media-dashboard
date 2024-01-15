
import './App.css';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import { useLayoutEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useLayoutEffect(() => {
    const toggleSwitch = document.querySelector('input[type="checkbox"]');

    function switchTheme(event) {
      if (event.target.checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Set the initial theme
    document.documentElement.setAttribute('data-theme', `${theme}`);
  }, [theme]);

  return (
    <main className='content-grid'>
      <Layout1/>
      <Layout2/>

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </main>
  );
}

export default App;

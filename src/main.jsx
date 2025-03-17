import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/custom-animation.css';
import './assets/css/swiper-bundle.css';
import './assets/css/slick.css';
import './assets/css/flaticon.css';
import './assets/css/meanmenu.css';
import './assets/css/font-awesome-pro.css';
import './assets/css/magnific-popup.css';
import './assets/css/spacing.css';
import './assets/css/style.css';

// ✅ Import JavaScript files properly in Vite
// import './assets/js/jquery.js';
// import './assets/js/waypoints.js';
import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/swiper-bundle.js';
// import './assets/js/slick.js';
// import './assets/js/magnific-popup.js';
// import './assets/js/counterup.js';
// import './assets/js/wow.js';
// import './assets/js/meanmenu.js';
// import './assets/js/isotope-pkgd.js';
// import './assets/js/imagesloaded-pkgd.js';
// import './assets/js/ajax-form.js';
// import './assets/js/main.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { h, render } from 'preact'
import 'preact/devtools'
import App from './App.js'
import './index.css'

const root = document.getElementById('root')

// Don't register the service worker
// until the page has fully loaded
window.addEventListener('load', () => {
  // Is service worker available?
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('/cache.js').then(() => {
  //     console.log('Service worker registered!');
  //   }).catch((error) => {
  //     console.warn('Error registering service worker:');
  //     console.warn(error);
  //   });
  // }
});

if (root != null) {
  render(<App />, root)
}

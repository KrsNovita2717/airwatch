import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
// import { createErrorPage } from './templates/template-creator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppshell();
  }

  _initialAppshell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', event => {
      event.preventDefault();
      const id = skipLink.getAttribute('href');
      const targetSection = document.querySelector(id);
      if (targetSection) {
        targetSection.setAttribute('tabindex', 0);
        targetSection.focus();
      }
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    // try {
    //   this._content.innerHTML = await page.render();
    //   await page.afterRender();
    // } catch (error) {
    //   console.error('Terjadi kesalahan:', error);
    //   this._content.innerHTML = createErrorPage();
    // }
  }
}

export default App;

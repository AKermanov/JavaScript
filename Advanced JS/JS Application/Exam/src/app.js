import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logoutUser);

page('/', extendContext, homePage);
page('/login', extendContext, loginPage);
page('/register', extendContext, registerPage);
page('/catalog', extendContext, catalogPage);
page('/create', extendContext, createPage);
page('/details/:id', extendContext, detailsPage);
page('/edit/:id', extendContext, editPage);

setUserNav();
page.start();

function extendContext(ctx, next) {
  ctx.render = content => render(content, main);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
  const email = sessionStorage.getItem('email');

  if (email) {
    document.getElementById('user').style.display = 'block';
    document.getElementById('guest').style.display = 'none';
  } else {
    document.getElementById('user').style.display = 'none';
    document.getElementById('guest').style.display = 'block';
  }
}

async function logoutUser() {
  await logout();

  setUserNav();
  page.redirect('/');
}

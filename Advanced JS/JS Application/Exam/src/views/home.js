import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSortedItems } from '../api/data.js';

const homeTemplate = (js, cSharp, java, python) => html`<section
  id="home-page"
  class="content"
>
  <h1>Recent Articles</h1>

  <section class="recent js">
    <h2>JavaScript</h2>
    ${js.length > 0 ? js.map(articleTemplate) : html`<h3>No articles yet</h3>`}
  </section>

  <section class="recent csharp">
    <h2>C#</h2>
    ${cSharp.length > 0
      ? cSharp.map(articleTemplate)
      : html`<h3>No articles yet</h3>`}
  </section>

  <section class="recent java">
    <h2>Java</h2>
    ${java.length > 0
      ? java.map(articleTemplate)
      : html`<h3>No articles yet</h3>`}
  </section>

  <section class="recent python">
    <h2>Python</h2>
    ${python.length > 0
      ? python.map(articleTemplate)
      : html`<h3>No articles yet</h3>`}
  </section>
</section>`;

const articleTemplate = item => html` <article>
  <h3>${item.title}</h3>
  <p>${item.content}</p>
  <a href="/details/${item._id}" class="btn details-btn">Details</a>
</article>`;

export async function homePage(ctx) {
  const items = await getSortedItems();

  const javascript = items.filter(a => a.category == 'JavaScript');
  const csharp = items.filter(a => a.category == 'C#');
  const java = items.filter(a => a.category == 'Java');
  const python = items.filter(a => a.category == 'Python');

  ctx.render(homeTemplate(javascript, csharp, java, python));
}

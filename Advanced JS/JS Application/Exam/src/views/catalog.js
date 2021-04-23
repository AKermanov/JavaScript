import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../api/data.js';

const catalogTemplate = items => html`<section
  id="catalog-page"
  class="content catalogue"
>
  <h1>All Articles</h1>

  ${items.length > 0
    ? items.map(articleTemplate)
    : html`<h3 class="no-articles">No articles yet</h3>`}
</section>`;

const articleTemplate = items => html` <a
  class="article-preview"
  href="/details/${items._id}"
>
  <article>
    <h3>Topic: <span>${items.title}</span></h3>
    <p>Category: <span>${items.category}</span></p>
  </article>
</a>`;

export async function catalogPage(ctx) {
  const items = await getAllItems();

  ctx.render(catalogTemplate(items));
}

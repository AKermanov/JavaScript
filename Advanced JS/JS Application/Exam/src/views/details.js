import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemsById, deleteItems } from '../api/data.js';

const detailsTemplate = (item, isOwner, dellItem) => html`<section
  id="details-page"
  class="content details"
>
  <h1>${item.title}</h1>

  <div class="details-content">
    <strong>Published in category ${item.category}</strong>
    <p>${item.content}</p>

    <div class="buttons">
      ${isOwner
        ? html`<a
              @click=${dellItem}
              href="javascript:void(0)"
              class="btn delete"
              >Delete</a
            >
            <a href="/edit/${item._id}" class="btn edit">Edit</a>`
        : ''}

      <a href="/" class="btn edit">Back</a>
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const item = await getItemsById(ctx.params.id);
  const currentUser = sessionStorage.getItem('userId');
  const isOwner = currentUser == item._ownerId;

  ctx.render(detailsTemplate(item, isOwner, deleteItem));

  async function deleteItem() {
    const confirmed = confirm('Confirm you want to delete this item!');

    if (confirmed) {
      await deleteItems(item._id);

      ctx.page.redirect('/');
    }
  }
}

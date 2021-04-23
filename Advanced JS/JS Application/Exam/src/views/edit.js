import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemsById, editItems } from '../api/data.js';

const editTemplate = (item, onSubmit) => html`<section
  id="edit-page"
  class="content"
>
  <h1>Edit Article</h1>

  <form @submit=${onSubmit} id="edit" action="#" method="">
    <fieldset>
      <p class="field title">
        <label for="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter article title"
          .value=${item.title}
        />
      </p>

      <p class="field category">
        <label for="category">Category:</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter article category"
          .value=${item.category}
        />
      </p>
      <p class="field">
        <label for="content">Content:</label>
        <textarea name="content" id="content" .value=${item.content}></textarea>
      </p>

      <p class="field submit">
        <input class="btn submit" type="submit" value="Save Changes" />
      </p>
    </fieldset>
  </form>
</section>`;

export async function editPage(ctx) {
  const item = await getItemsById(ctx.params.id);

  ctx.render(editTemplate(item, onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title');
    let category = formData.get('category');
    const content = formData.get('content');

    if (title == '' || category == '' || content == '') {
      return alert('Title, category, and content are required!');
    }

    if (category.toLowerCase() == 'javascript') {
      category = 'JavaScript';
    } else if (category.toLowerCase() == 'c#') {
      category = 'C#';
    } else if (category.toLowerCase() == 'java') {
      category = 'Java';
    } else if (category.toLowerCase() == 'python') {
      category = 'Python';
    } else {
      return alert('Invalid category!');
    }

    await editItems(item._id, { title, category, content });
    ctx.page.redirect('/details/' + item._id);
  }
}

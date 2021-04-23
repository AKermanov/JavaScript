import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItems } from '../api/data.js';

const createTemplate = onSubmit => html`<section
  id="create-page"
  class="content"
>
  <h1>Create Article</h1>

  <form @submit=${onSubmit} id="create">
    <fieldset>
      <p class="field title">
        <label for="create-title">Title:</label>
        <input
          type="text"
          id="create-title"
          name="title"
          placeholder="Enter article title"
        />
      </p>

      <p class="field category">
        <label for="create-category">Category:</label>
        <input
          type="text"
          id="create-category"
          name="category"
          placeholder="Enter article category"
        />
      </p>
      <p class="field">
        <label for="create-content">Content:</label>
        <textarea name="content" id="create-content"></textarea>
      </p>

      <p class="field submit">
        <input class="btn submit" type="submit" value="Create" />
      </p>
    </fieldset>
  </form>
</section>`;

export async function createPage(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const title = formData.get('title').trim();
    let category = formData.get('category').trim();
    const content = formData.get('content').trim();

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

    await createItems({ title, category, content });
    ctx.page.redirect('/');
  }
}

class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    }

       return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
  }

  like(username) {
    if (this._likes.some((x) => x == username)) {
      throw new Error("You can't like the same story twice!");
    } else if (username === this.creator) {
      throw new Error("You can't like your own story!");
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    } else {
        
      let index = this._likes.indexOf(username);

      this._likes.splice(index, 1);

      return `${username} disliked ${this.title}`;
    }
  }

  comment(username, content, id) {
    let comment = this._comments.find((c) => c.id === id);

    if (id === undefined || comment == false) {
      comment = {
        id: this._comments.length + 1,
        username,
        content,
        replies: [],
      };
      this._comments.push(comment);
      return `${username} commented on ${this.title}`;
    }

    const rply = {
      id: `${comment.id}.${comment.replies.length + 1}`,
      username,
      content,
    };

    comment.replies.push(rply);
    return 'You replied successfully';
  }

  toString(sortingType) {
    let sortType = {
      username: (a, b) => {
        return a.username.localeCompare(b.username);
      },
      desc: (a, b) => {
        return b.id - a.id;
      },
      asc: (a, b) => {
        return a.id - b.id;
      },
    };

    let currentSort = sortType[sortingType];

    let result = `Title: ${this.title}`;
    result += '\n';
    result += `Creator: ${this.creator}`;
    result += '\n';
    result += `Likes: ${this._likes.length}`;
    result += '\n';
    result += 'Comments:';

    if (this._comments.length > 0) {
      result += '\n';
    } else {
      result += '';
    }

    let sortedComments = this._comments.slice().sort(currentSort);

    for (const currentCmt of sortedComments) {
      result += `-- ${currentCmt.id}. ${currentCmt.username}: ${currentCmt.content}`;
      result += '\n';

      let sortedRply = currentCmt.replies.sort(currentSort);

      for (const currentRply of sortedRply) {
        result += `--- ${currentRply.id}. ${currentRply.username}: ${currentRply.content}`;
        result += '\n';
      }
    }

    return result.trim();
  }
}



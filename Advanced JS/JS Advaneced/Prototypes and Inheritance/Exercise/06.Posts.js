function solve() {
class Post {
    constructor(title,content) {
        this.title = title;
        this.content = content;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}\n`
    }
}

class SocialMediaPost extends Post {
    constructor(title,content,likes,dislikes) {
        super(title,content)
        this.likes = likes
        this.dislikes = dislikes
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment)
    }

    toString() {
        let output = super.toString()
        output +=`Rating: ${this.likes - this.dislikes}`;

        if (this.comments.length > 0) {
            output += `\nComments:`
            this.comments.forEach(comment => {
                output += `\n * ${comment}`;
            })
        }
        return output
    }
}
class BlogPost extends Post {
    constructor(title, content, views) {
        super(title,content);
        this.views = views;
    }
    view(){
        this.views += 1;
        return this;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
    }
}
return {Post,SocialMediaPost,BlogPost}
}

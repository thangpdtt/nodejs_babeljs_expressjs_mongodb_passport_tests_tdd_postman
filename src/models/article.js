import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slug from "slug";

var User = mongoose.model("User");

var ArticleSchema = new mongoose.Schema({
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
    title: String,
    description: String,
    body: String,
    favoritesCount: {
        type: number,
        default: 0
    },
    tagList: [{
        type: String
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

ArticleSchema.plugin(uniqueValidator, {
    message: "is already taken"
});

ArticleSchema.pre("validate", (next) => {
    if (!this.slug) {
        this.slugify();
    }
});

ArticleSchema.methods.slugify = () => {
    this.slug = slug(this.title) + "-" + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

ArticleSchema.methods.updateFavoriteCount = () => {
    let article = this;
    return User.count({
            favorites: {
                $in: [article._id]
            }
        })
        .then((count) => {
            article.favoritesCount = count;
            return article.save();
        });
};

ArticleSchema.methods.toJSONFor = (user) => {
    return {
        slug: this.slug,
        title: this.title,
        description: this.description,
        body: this.body,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        tagList: this.tagList,
        favorited: user ? user.isFavorite(this._id) : false,
        favoritesCount: this.favoritesCount,
        author: this.author.toProfileJSONFor(user)
    };
};

mongoose.model("Article", ArticleSchema);
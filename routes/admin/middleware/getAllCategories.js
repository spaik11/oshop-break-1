const Category = require('../categories/models/Category');

const getAllCategories = (req, res, next) => {
  Category.take({}, (err, categories) => {
    if (err) return next(err);
    console.log(categories);
    res.locals.categories = categories;
  });
};

module.exports = getAllCategories;

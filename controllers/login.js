const User = require("../models/UserSchema");
const Product = require("../models/ProductSchema");
const url = require("url");

const loginForm = (req, res) => {
  const messages = req.query;
  res.render("login", { messages });
};
const loginWithUser = (req, res) => {
  User.findOne(
    { email: req.body.email, password: req.body.password },
    (err, user) => {
      if (user == null) {
        res.redirect(
          url.format({
            pathname: "/login",
            query: {
              failMessage: "E-mail or Password is wrong, please check it!",
              falseEntered: true,
            },
          })
        );
      } else if (!Object.keys(user) == 0) {
        if (user.role == "administrator") {
          res.redirect(
            url.format({
              pathname: "/login/admin",
              query: { userName: user.name },
            })
          );
        } else {
          console.log(user.name);
          res.redirect(
            url.format({
              pathname: "/login/user",
              query: { userName: user.name },
            })
          );
        }
      }
    }
  );
};

//! ADMIN
const adminLoggedIn = (req, res) => {
  const userQuery = req.query;
  Product.find((err, product) => {
    User.find((err, user) => {
      res.render("admin", {
        products: product,
        users: user,
        userQuery,
      });
    });
  });
};

// Create User
const createNewUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(() => {
    res.redirect("/login/admin");
  });
};

//  Update User
const updateUser1 = async (req, res) => {
  const update = await User.findById(req.params.id);
  res.render("userUpdate", { update });
};
// updating user
const updatedUser = async (req, res) => {
  const { name, email, password, country, address, zip, salary, role } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    name,
    email,
    password,
    country,
    address,
    zip,
    salary,
    role,
  });
  res.redirect("/login/admin");
};

// Delete User 
const deleteUser = (req, res) => {
  const deleteUserId = req.params.id;
  User.findByIdAndDelete(deleteUserId, (err, doc) => {
    console.log("User deleted:", doc);
    res.redirect(
      url.format({
        pathname: "/login/admin",
        query: {
          deleteMessage: `User Account: ${doc.name} has been successfully deleted`,
          deleted: true,
        },
      })
    );
  });
};

//! USER
const loginUser = (req, res) => {
  const userQuery = req.query;
  Product.find((err, product) => {
    User.find((err, user) => {
      res.render("user", { product, user, userQuery });
    });
  });
};

// User Add Product
const addProduct = (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save().then(() => {
    res.redirect("/login/user");
  });
};

// User Update Product
const updateProduct1 = async (req, res) => {
  const update = await Product.findById(req.params.id);
  res.render("productUpdate", { update });
};
// updating product
const updatedProduct = async (req, res) => {
  const { title, price, discount, quantity } = req.body;
  await Product.findByIdAndUpdate(req.params.id, {
    title,
    price,
    discount,
    quantity,
  });

  res.redirect("/login/user");
};

//  User Delete Product
const deleteProduct = (req, res) => {
  const deleteProductId = req.params.id;
  Product.findByIdAndDelete(deleteProductId, (err, doc) => {
    console.log("Product deleted:", doc);
    res.redirect(
      url.format({
        pathname: "/login/user",
        query: {
          deleteMessage: `Product Deleted: ${doc.title} has been successfully deleted`,
          deleted: true,
        },
      })
    );
  });
};

module.exports = {
  loginForm,
  loginWithUser,
  adminLoggedIn,
  createNewUser,
  updateUser1,
  updatedUser,
  deleteUser,
  loginUser,
  addProduct,
  updateProduct1,
  updatedProduct,
  deleteProduct,
};
const categories = require("../models/categories");
const appetizers = require("../models/appetizers");
const hamburgers = require("../models/hamburgers");
const desserts = require("../models/desserts");
const beverages = require("../models/beverages");
const paymentOptions = require("../models/paymentOptions");
const createOrder = require("../models/createOrder");
const login = require("../models/login");

const router = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  },
  {
    method: "GET",
    path: "/categories",
    handler: (request, h) => {
      return categories;
    },
  },
  {
    method: "GET",
    path: "/hamburgers",
    handler: (request, h) => {
      return hamburgers;
    },
  },
  {
    method: "GET",
    path: "/appetizers",
    handler: (request, h) => {
      return appetizers;
    },
  },
  {
    method: "GET",
    path: "/desserts",
    handler: (request, h) => {
      return desserts;
    },
  },
  {
    method: "GET",
    path: "/beverages",
    handler: (request, h) => {
      return beverages;
    },
  },
  {
    method: "GET",
    path: "/payment/options",
    handler: (request, h) => {
      return paymentOptions;
    },
  },
  {
    method: "POST",
    path: "/order/create-order",
    handler: (request, h) => {
      return createOrder(request, h);
    },
  },
  {
    method: "POST",
    path: "/user/login",
    handler: (request, h) => {
      return login(request, h);
    },
  },
];

module.exports = router;

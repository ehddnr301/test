"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;

_mongoose["default"].connect("mongodb+srv://ehddnr:pqYE7AuwBzG7hvS@graph-todo.0rugc.mongodb.net/graphql-todo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("✅  Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("\u274C Error on DB Connection:".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError);

var handleListening = function handleListening() {
  return console.log("\u2705 Hi");
};

app.listen(PORT, handleListening);
app.get("/", function (req, res) {
  return res.send("hi");
});
app.get("/fromRaspberry", function (req, res) {
  res.status(200).json("Raspberry success");
});
app.get("/fromApp", function (req, res) {
  res.status(200).json("fromApp success");
});
//# sourceMappingURL=index.js.map
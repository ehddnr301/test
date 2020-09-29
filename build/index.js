"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_mongoose["default"].connect("mongodb://localhost:27017/cap", {
  useNewUrlParser: true,
  useFindAndModify: false
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
  return console.log("\u2705  Listening on: http://localhost:4000");
};

app.listen(4000, handleListening);
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
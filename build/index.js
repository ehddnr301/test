"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cap = _interopRequireDefault(require("./cap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 4000;

_mongoose["default"].connect(process.env.MONGO, {
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
app.get("/test", function (req, res) {
  res.status(200).json('test');
});
app.get("/seeData", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var a;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _cap["default"].find({});

          case 2:
            a = _context.sent;
            res.status(200).json(a);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get("/makeData", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var a;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _cap["default"].create({
              isHelmet: true
            });

          case 3:
            a = _context2.sent;
            res.status(200).send('hi');
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).send(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
//# sourceMappingURL=index.js.map
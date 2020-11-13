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
app.get("/test", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var date, aa, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            date = req.query.date; // await Cap.findOne({
            //   createdAt:
            // })

            if (!date) {
              _context.next = 13;
              break;
            }

            if (!(date.length === 8)) {
              _context.next = 10;
              break;
            }

            _context.next = 5;
            return _cap["default"].find({});

          case 5:
            aa = _context.sent;
            b = aa.filter(function (a) {
              var getDate = JSON.stringify(a.createdAt).split("T")[0].substring(1).split("-").join("");

              if (getDate === date) {
                return getDate;
              } else {
                return null;
              }
            });
            res.status(200).json(b);
            _context.next = 11;
            break;

          case 10:
            res.status(400).send("worng date input");

          case 11:
            _context.next = 14;
            break;

          case 13:
            res.status(400).send("give me date");

          case 14:
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
app.get("/seeAllData", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var a;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _cap["default"].find({});

          case 2:
            a = _context2.sent;
            res.status(200).json(a);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.get("/helmetTrue", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var password;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              password = req.query.password;

              if (password === "capston") {
                // await Cap.create({
                //   isHelmet: true,
                // });
                res.status(200).send("data created");
              } else {
                res.status(400).send("wrong password");
              }
            } catch (err) {
              console.log(err);
              res.status(400).send(err);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get("/helmetFalse", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var password;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            try {
              password = req.query.password;

              if (password === "capston") {
                // await Cap.create({
                //   isHelmet: false,
                // });
                res.status(200).send("data created");
              } else {
                res.status(400).send("wrong password");
              }
            } catch (err) {
              console.log(err);
              res.status(400).send(err);
            }

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
//# sourceMappingURL=index.js.map
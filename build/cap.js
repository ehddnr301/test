"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CapSchema = new _mongoose["default"].Schema({
  time: String,
  isHelmet: Boolean,
  createdAt: {
    "default": Date.now,
    type: Date
  }
});

var model = _mongoose["default"].model("Cap", CapSchema);

var _default = model;
exports["default"] = _default;
//# sourceMappingURL=cap.js.map
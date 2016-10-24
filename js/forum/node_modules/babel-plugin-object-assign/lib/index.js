"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (_ref) {
  var Plugin = _ref.Plugin;
  var t = _ref.types;

  return new Plugin("object-assign", {
    metadata: {
      group: "builtin-pre"
    },

    visitor: {
      CallExpression: function CallExpression(node, parent, scope, file) {
        if (this.get("callee").matchesPattern("Object.assign")) {
          node.callee = file.addHelper("extends");
        }
      }
    }
  });
};

module.exports = exports["default"];
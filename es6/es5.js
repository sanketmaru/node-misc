$traceurRuntime.options.symbols = true;
System.registerModule("es6.js", [], function(require) {
  "use strict";
  var __moduleName = "es6.js";
  var obj = {
    name: "sanket",
    handleMessage: function(message, handler) {
      handler(message);
    },
    receive: function() {
      var $__0 = this;
      this.handleMessage("Hello,", ($traceurRuntime.initTailRecursiveFunction(function(message) {
        return $traceurRuntime.call(function(message) {
          return $traceurRuntime.continuation(console.log, console, [message + $__0.name]);
        }, this, arguments);
      })));
    }
  };
  obj.receive();
  return {};
});
System.get("es6.js" + '');

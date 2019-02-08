// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-4-1
description: Array.prototype.filter throws TypeError if callbackfn is undefined
---*/

  var arr = new Array(10);
assert.throws(TypeError, function() {
    arr.filter();
});

reportCompare(0, 0);
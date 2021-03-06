/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch13/13.2/13.2-5-s.js
 * @description StrictMode - reading a property named 'caller' of function objects is not allowed outside the function
 * @onlyStrict
 */


function testcase() {
        var foo = new Function("'use strict';");
        try {
            var temp = foo.caller;
            return false;
        }
        catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);

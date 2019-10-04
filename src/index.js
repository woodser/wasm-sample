/**
 * Starts the web application and demonstrates using two versions of Foo.
 * One version is implemented in native JavaScript.
 * Another version is implemented by wrapping C++ using WebAssembly.
 */
"use strict"

// imports
const assert = require("assert");
const FooLocal = require("./js/FooLocal");
const FooWasm = require("./js/FooWasm");

// start the application
startApp();
async function startApp() {
  console.log("Starting app...");
  
  // demonstrate local foo
  let fooLocal = new FooLocal();
  fooLocal.setMessage("hello world");
  console.log("Foo local says: " + fooLocal.getMessage());
  
  require("./WasmSample_WASM")().ready.then(function(thisModule) {
    let fooWasm = new FooWasm(thisModule);
    fooWasm.setMessage("Hello from foo wasm");
    console.log("Foo wasm says: " + fooWasm.getMessage());
  });
}
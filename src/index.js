/**
 * Starts the web application and demonstrates using two versions of Foo.
 * One version is implemented in native JavaScript.
 * Another version is implemented by wrapping C++ using WebAssembly.
 */
"use strict"

// imports
const assert = require("assert");
const FooLocal = require("./js/FooLocal");

// start the application
startApp();
async function startApp() {
  console.log("Starting app...");
  
  // demonstrate local foo
  let fooLocal = new FooLocal();
  fooLocal.setMessage("hello world");
  console.log("Foo local says: " + fooLocal.getMessage());
  
  // import FooWasm which loads webassembly module
  const FooWasm = await require("./js/FooWasm")();
  
  // demonstrate wasm foo
  let fooWasm = new FooWasm();
  fooWasm.setMessage("Hello from foo wasm");
  console.log("Foo wasm says: " + fooWasm.getMessage());
}
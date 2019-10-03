/**
 * TODO
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
  
  let fooLocal = new FooLocal();
  fooLocal.setMessage("hello world");
  console.log("Foo local says: " + fooLocal.getMessage());
  
  let fooWasm = new FooWasm();
  fooWasm.setMessage("hello world from wasm");
  console.log("Foo wasm says: " + fooWasm.getMessage());
}
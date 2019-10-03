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
  
  // demonstrate local foo
  let fooLocal = new FooLocal();
  fooLocal.setMessage("hello world");
  console.log("Foo local says: " + fooLocal.getMessage());
  
  // demonstrate wasm foo
  let wasmModule = await require("./js/WasmSample_WASM");
  let fooWasm = new FooWasm(wasmModule);
  fooWasm.testMessage();
  fooWasm.setMessage("hello world from wasm");
  console.log("Foo wasm says: " + fooWasm.getMessage());
}
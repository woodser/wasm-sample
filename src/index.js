/**
 * TODO
 */

"use strict"

// imports
const assert = require("assert");
const FooLocal = require("./js/FooLocal");
const FooWasm = require("./js/FooWasm");

//import FooWasm from "./js/WasmSample_WASM.js";
//import FooWasmModule from "./js/WasmSample_WASM.wasm";
//
////Since webpack will change the name and potentially the path of the 
////`.wasm` file, we have to provide a `locateFile()` hook to redirect
////to the appropriate URL.
////More details: https://kripken.github.io/emscripten-site/docs/api_reference/module.html
//const module = FooWasm({
//  locateFile(path) {
//   if (path.endsWith('.wasm')) {
//     return FooWasmModule;
//   }
//   return path;
//  }
//});
//
//module.onRuntimeInitialized = () => {
//  console.log("Ready?");
//  console.log(module);
//};

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




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
  
//  let importObject = { imports: { imported_func: arg => console.log(arg) } };
//  fetch("./js/WasmSAmple_WASM.wasm")
//  .then(response => response.arrayBuffer())
//  .then(bits => WebAssembly.compile(bits))
//  .then(module => { 
//    let wasmModule = new WebAssembly.Instance(module, importObject);
//    console.log("We have a module!!!");
//    console.log(wasmModule);
//  })
  
  const memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });
  
  let imports = {};
  imports.env = {};
  imports.env.memoryBase = imports.env.memoryBase || 0;
  imports.env.tableBase = imports.env.tableBase || 0;
  imports.env.memory = new WebAssembly.Memory({ initial: 256 });
  imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });
  imports.env.abortStackOverflow = function(arg) { throw new Error("Overflow: " + arg); }
  imports.env.STACKTOP= 0;
  imports.env.STACK_MAX = memory.buffer.byteLength;
  imports.imported_func = function(arg) { console.log(arg); };
  
//  const env = {
//      'abortStackOverflow': _ => { throw new Error('overflow'); },
//      'table': new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
//      '__table_base': 0,
//      'memory': memory,
//      '__memory_base': 1024,
//      'STACKTOP': 0,
//      'STACK_MAX': memory.buffer.byteLength,
//    };
  
  require("./js/WasmSample_WASM")().ready.then(function(thisModule) {
    console.log(thisModule);
  });
  
//  //let importObject = { imports: imports };
//  fetch('./js/WasmSample_WASM.wasm').then(response =>
//    response.arrayBuffer()
//  ).then(bytes =>
//    WebAssembly.instantiate(bytes, imports)
//  ).then(results => {
//    console.log("Results");
//    console.log(results);
//    // Do something with the results!
//  });
  
//  //const WasmSample = await require("./js/WasmSample_WASM");
//  require("./js/WasmSample_WASM")().ready.then(function(thisModule) {
//    console.log(thisModule);
//  });
  
  //await FooWasm();
  
  //const FooWasm = require("./js/FooWasm");

  
  //await new Promise(function(resolve) { setTimeout(resolve, 1000); });
  
  //WasmSample();
  //temp();
  
  
  // demonstrate wasm foo
  //let fooWasm = new FooWasm();
//  let fooWasm = new FooWasm(WasmSample);
//  fooWasm.testMessage();
//  fooWasm.setMessage("hello world from wasm");
//  console.log("Foo wasm says: " + FooWasm.getMessage());
}




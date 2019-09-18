//let get_message;
//let set_message;
//
//function loadWasm(filename) {
//  console.log("loadWasm(" + filename + ")");
//  return fetch(filename)
//  .then(response => response.arrayBuffer())
//  .then(bits => WebAssembly.compile(bits))
//  .then(module => { return new WebAssembly.Instance(module) });
//};
//
//loadWasm("foo_bridge.wasm")
//.then(instance => {
//  console.log("Setting exports");
//  get_message = instance.exports.get_message;
//  set_message = instance.exports.set_message;
//  console.log("Done setting exports");
//});
//
//
//Module.onRuntimeInitialized = function() {
//  console.log("Module is initialized!");
//  console.log(Module);
//}


/**
 * Sample browser application which uses a JavaScript library to interact
 * with a Monero daemon using RPC and a Monero wallet using RPC and WASM
 * bindings.
 */

"use strict"

// imports
const assert = require("assert");
const foo_bridge = require("foo_bridge");  // this file is currently auto-generated then copied to build dir // TODO: automate

Module.onRuntimeInitialized = function() {
  console.log("Module is initialized!");
  console.log(Module);
  startApp();
}

// start the application
async function startApp() {
  console.log("Starting app...");
}
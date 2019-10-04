/**
 * Foo which uses wasm and c++ implementation.
 */
class FooWasm {
  
  constructor(wasmModule) {
    this.cppAddress = FooWasm.WASM_MODULE.new_foo();
  }
  
  getMessage() {
    return FooWasm.WASM_MODULE.get_message(this.cppAddress);
  }
  
  setMessage(msg) {
    FooWasm.WASM_MODULE.set_message(this.cppAddress, msg);
  }
}

module.exports = async function() {
  return new Promise(function(resolve, reject) {
    require("../WasmSample_WASM")().ready.then(function(module) {
      FooWasm.WASM_MODULE = module;
      resolve(FooWasm);
    }).catch(function(e) {
      console.log("Error loading WasmSample_WASM:", e);
      reject(e);
    });
  });
}
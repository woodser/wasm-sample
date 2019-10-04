/**
 * Foo which uses wasm and c++ implementation.
 */
class FooWasm {
  
  constructor(wasmModule) {
    console.log("Constructing FooWasm with module");
    console.log(wasmModule);
    this.wasmModule = wasmModule;
  }
  
  testMessage() {
    //this.wasmModule.setMessage(msg);
    console.log("invoking test_method()");
    this.wasmModule.test_message();
  }
  
  setMessage(msg) {
    console.log("Setting message");
    this.wasmModule.setMessage(msg);
    console.log("Done setting message");
    throw Error("FooWasm.setMessage() not implemented");
  }
  
  getMessage() {
    throw Error("FooWasm.getMessage() not implemented");
  }
}

module.exports = async function() {
  let WasmSampleModule = await require("./WasmSample_WASM.wasm");
  console.log(WasmSampleModule);
  return new FooWasm(WasmSampleModule);
}

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
    console.log(this.wasmModule.test_method);
    
    //let test_method = this.wasmModule.cwrap('test_method', 'string', ['string']);
    //test_method("test_arg");
    
    this.wasmModule.test_method("test arg");
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

module.exports = FooWasm;
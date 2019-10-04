/**
 * Foo which uses wasm and c++ implementation.
 */
class FooWasm {
  
  constructor(wasmModule) {
    this.wasmModule = wasmModule;
    this.cppAddress = this.wasmModule.new_foo();
  }
  
  getMessage() {
    return this.wasmModule.get_message(this.cppAddress);
  }
  
  setMessage(msg) {
    this.wasmModule.set_message(this.cppAddress, msg);
  }
}

module.exports = FooWasm;
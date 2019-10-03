/**
 * Foo which uses wasm and c++ implementation.
 */
class FooWasm {
  
  setMessage(msg) {
    throw Error("FooWasm.setMessage() not implemented");
  }
  
  getMessage() {
    throw Error("FooWasm.getMessage() not implemented");
  }
}

module.exports = FooWasm;
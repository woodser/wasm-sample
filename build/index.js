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


Module.onRuntimeInitialized = function() {
  console.log("Module is initialized!");
  console.log(Module);
}
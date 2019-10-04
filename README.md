# Introduction
This project demonstrates how to use a stateful C++ object, Foo.h/cpp, as a stateful JavaScript object, FooWasm.js, that runs in a web application using WebAssembly.

# How to Run the Sample
1. Install emscripten: https://emscripten.org/docs/getting_started/downloads.html
2. `source <emscripten_path>/emsdk/emsdk_env.sh`
3. `./bin/build-emcpp.sh` (builds WasmSample_WASM.js and WasmSample_WASM.wasm to the ./build directory)
4. Copy ./build/WasmSample_WASM.js and ./build/WasmSample_WASM.wasm to ./src
5. `./bin/start_dev_browser ` 
6. Open http://localhost:9100/ in a browser

Note: the server used in `./bin_start_dev_browser` returns the wrong mime-type which can cause this application to not work on some browsers.  To user a different server that returns the correct mime-type, run `emrun --port 8080 ./browser_build/` instead of `./bin/start_dev_browser ` and open http://localhost:8080/browser_build/ in a browser.

# Full Stack

The full stack from the stateful C++ Foo object to the browser is:

1. Foo.h/cpp
2. foo_bridge.h/cpp
3. index.cpp
4. Build WasmSample_WASM.js/.wasm using `./bin/build-emcpp.sh`
5. FooWasm.js encapsulates WasmSample_WASM module for instance implementation
6. index.js requires("WasmSample_WASM") and constructs a FooWasm.js
7. webpack script creates `./browser_build` with index.html, wasm-sample-bundle.js, and WasmSample_WASM.wasm and starts a dev server using `./bin/start_dev_browser`
8. browser loads and executes application
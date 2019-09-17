# wasm-sample
Sample web app which uses webassembly

# How to Run The Sample
1. Install emscripten: https://emscripten.org/docs/getting_started/downloads.html
2. source emsdk/emsdk_env.sh
3. em++ -s WASM=1 src/cpp/hello.cpp -o hello.html
4. emrun --port 8080 ./
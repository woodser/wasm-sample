#include <iostream>
#include <emscripten/bind.h>
#include <emscripten.h>

using namespace std;

string get_message(const string& args) {
  cout << "index.cpp get_message(" << args << ")" << endl;
}

string set_message(const string& args) {
  cout << "index.cpp set_message" << args << ")" << endl;
}

// C++ -> JS bindings
EMSCRIPTEN_BINDINGS(module) {
  emscripten::function("get_message", &get_message);
  emscripten::function("set_message", &set_message);
}

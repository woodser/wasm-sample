#include <stdio.h>
#include <emscripten/bind.h>

#include "foo_bridge.cpp"

// register bindings from C++ to JS using emscripten
EMSCRIPTEN_BINDINGS(module)
{
    emscripten::function("test_method", &foo_bridge::test_method);
}
extern "C"
{
}

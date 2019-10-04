#include <stdio.h>
#include <emscripten/bind.h>

#include "foo_bridge.h"

// register bindings from C++ to JS using emscripten
EMSCRIPTEN_BINDINGS(module)
{
    emscripten::function("new_foo", &foo_bridge::new_foo);
    emscripten::function("get_message", &foo_bridge::get_message);
    emscripten::function("set_message", &foo_bridge::set_message);
}
extern "C"
{
}

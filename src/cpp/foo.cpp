#include "foo.h"

using namespace std;

string foo::get_message() const {
  return msg;
}

void foo::set_message(const string& msg) {
  this->msg = msg;
}

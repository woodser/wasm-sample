#include <iostream>
#include "foo_bridge.h"
#include "foo.h"

using namespace std;

//int main() {
//  cout << "Hello world!" << endl;
//  foo my_foo;
//  my_foo.set_message("hello there");
//  cout << "Foo says: " << my_foo.get_message() << endl;
//  return 0;
//}

using namespace foo_bridge;

int foo_bridge::new_foo() {
  foo* ptr = new foo();
  return (int) ptr;
}

string foo_bridge::get_message(int handle) {
  foo* ptr = (foo*) handle;
  return ptr->get_message();
}

void foo_bridge::set_message(int handle, string msg) {
  foo* ptr = (foo*) handle;
  ptr->set_message(msg);
}

#include <iostream>
#include "foo.cpp"

using namespace std;

int main() {
  cout << "Hello world!" << endl;
  foo my_foo;
  my_foo.set_message("hello there");
  cout << "Foo says: " << my_foo.get_message() << endl;
  return 0;
}

int new_foo() {
  foo* ptr = new foo();
  return (int) ptr;
}

string get_message(int handle) {
  foo* ptr = (foo*) handle;
  return ptr->get_message();
}

void set_message(int handle, string msg) {
  foo* ptr = (foo*) handle;
  ptr->set_message(msg);
}

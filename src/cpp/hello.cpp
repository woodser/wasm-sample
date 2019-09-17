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

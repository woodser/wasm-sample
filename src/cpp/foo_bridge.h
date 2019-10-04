/**
 * Header file for bridge
 */

#ifndef foo_bridge_h
#define foo_bridge_h

#include <string>

using namespace std;

namespace foo_bridge
{
  int new_foo();
  string get_message(int handle);
  void set_message(int handle, const string msg);
}

#endif /* foo_bridge_h */

using namespace std;

class foo {

public:
  string get_message() const;
  void set_message(const string& msg);

private:
  string msg;
};

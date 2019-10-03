/**
 * Foo with local implementation.
 */
class FooLocal {
  
  setMessage(msg) {
    this.msg = msg;
  }
  
  getMessage() {
    return this.msg;
  }
}

module.exports = FooLocal;
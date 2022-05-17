const mocha = require('mocha');
const { assert } = require('chai');

const Builder = require('../lib/builder');

mocha.describe('Builder', () => {
  mocha.it('validate builder for object', () => {
    const object = { foo: '' };
    const builder = Builder(object);
    assert.isFunction(builder.foo);
  });
  mocha.it('validate builder for function', () => {
    function Foo() {
      this.foo = '';
    }
    const builder = Builder(Foo);
    assert.isFunction(builder.foo);
  });
  mocha.it('validate builder for class', () => {
    class Foo {
      constructor(foo) {
        this.foo = foo;
      }
    }
    const builder = Builder(Foo);
    assert.isFunction(builder.foo);
  });
  mocha.it('validate builder methods', () => {
    const object = {
      fooVariable: '',
      fooFunction: () => {},
    };
    const builder = Builder(object);
    assert.isFunction(builder.fooVariable);
    assert.isUndefined(builder.fooFunction);
  });
  mocha.it('validate builder result', () => {
    const object = { foo: '' };
    const expected = { foo: 'value' };
    const actual = Builder(object).foo(expected.foo).build();
    assert.deepStrictEqual(actual, expected);
  });
});

/**
 * Negate a boolean from a key that is inside an object in an array
 * @format
 */
import {_negateBoolFromKeyInsideObjInArr} from '../../../src/functions';

describe('Negate a boolean from a key that is inside an object in an array', () => {
  it('Should negate the value of the key matched by id', () => {
    const _in_ = [
      {id: '1', completed: false, name: 'testing 1'},
      {id: '2', completed: false, name: 'testing 2'},
    ];
    const _out_ = [
      {id: '1', completed: true, name: 'testing 1'},
      {id: '2', completed: false, name: 'testing 2'},
    ];
    // @ts-ignore
    expect(_negateBoolFromKeyInsideObjInArr(_in_, 'completed', '1')).toEqual(
      _out_,
    );
  });

  it('Should iterate the array of object and check if the "string" match with some name key in the objects, if not match return "not key found - message"', () => {
    const _in_ = [{id: '1', completed: false}];
    const _out_ = 'not key found';
    // @ts-ignore
    expect(_negateBoolFromKeyInsideObjInArr(_in_, '', '1')).toBe(_out_);
  });

  it('Should be return "Invalid parameters - error" if the third parameters is not exist', () => {
    const _in_ = [{id: '1', completed: false}];
    const _out_ = 'Invalid parameters';
    // @ts-ignore
    expect(() => _negateBoolFromKeyInsideObjInArr(_in_, 100)).toThrow(_out_);
  });

  it('Should be return "Invalid parameters - error" if the second parameters is not a string', () => {
    const _in_ = [{id: '1', completed: false}];
    const _out_ = 'Invalid parameters';
    // @ts-ignore
    expect(() => _negateBoolFromKeyInsideObjInArr(_in_[0], 100)).toThrow(_out_);
  });

  it('Should be return "Invalid parameters - error" if the first parameters is not a array of objects', () => {
    const _in_ = '';
    const _out_ = 'Invalid parameters';
    // @ts-ignore
    expect(() => _negateBoolFromKeyInsideObjInArr(_in_, null)).toThrow(_out_);
  });
});

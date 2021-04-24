/**
 * CRUD task add
 * @format
 */
import {_add} from '../../../src/functions';

describe('CRUD task add', () => {
  const _in_ = [{id: '1', label: 'Hello word!'}];
  it('the function should be received an array of objects as first params and object like second param', () => {
    // @ts-ignore
    expect(() => _add({}, null)).toThrow('Params incorrect');
  });
  it('add new object to the array', () => {
    const obj = {id: '2', label: 'this is a new object!'};
    const _out_ = [{id: '1', label: 'Hello word!'}, obj];
    expect(_add(_in_, obj)).toEqual(_out_);
  });
});

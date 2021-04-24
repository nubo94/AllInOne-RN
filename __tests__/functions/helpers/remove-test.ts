/**
 * CRUD task remove
 * @format
 */
import {_remove} from '../../../src/functions';

describe('CRUD task remove', () => {
  const _in_ = [{id: '1', label: 'Hello word!'}];
  it('the function should be received an array of objects as first params and object like second param', () => {
    // @ts-ignore
    expect(() => _remove({}, '')).toThrow('Params incorrect');
  });
  it('remove object from the array', () => {
    expect(_remove(_in_, '1')).toEqual([]);
  });
});

/**
 * @jest-environment jsdom
 */

import Input from '../Input';

test.each([
  ['should return mir', '22', 'mir'],
  ['should return jsb', '31', 'jsb'],
  ['should return amex', '37', 'amex'],
  ['should return visa', '4', 'visa'],
  ['should return maestro', '63', 'maestro'],
  ['should return master', '55', 'master'],
  ['should return discover', '60', 'discover'],
  ['should return dinersclub', '36', 'dinersclub'],
  ['should return false', '27', false],

])(('it should be %s'), (_, input, expected) => {
  const inputNew = new Input('input', 'button');
  const result = inputNew.identify(input);
  expect(result).toBe(expected);
});

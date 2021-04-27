import replace from 'lodash/replace';

/**
 * set request counter
 * @param {IProtocol} string route to convert to https
 * @return string
 */
export default function _convertToHttps(str: string) {
  if (str) {
    if (_check(str, ['https:'])) {
      return str;
    }
    return replace(str, 'http', 'https') || str;
  }
  return str;
}

function _check(text: string, value: String[]) {
  var re = new RegExp(value.join('|'));
  return re.test(text);
}

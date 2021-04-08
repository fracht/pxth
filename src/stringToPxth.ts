/**
 * This is file is a copy of lodash's stringToPath function
 * Original file - https://github.com/lodash/lodash/blob/master/.internal/stringToPath.js
 */
import { Pxth } from './Pxth';

const propertyRegex = RegExp(
  // Match anything that isn't a dot or bracket.
  '[^.[\\]]+' +
    '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' +
    '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' +
    '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))',
  'g',
);

const escapeCharRegex = /\\(\\)?/g;

export const stringToPxth = (src: string): Pxth => {
  const result: string[] = [];

  if (src === '') {
    return [''];
  }

  if (src.charAt(0) === '.') {
    result.push('');
  }

  src.replace(propertyRegex, (match, expression, quote, subString) => {
    if (quote) {
      match = subString.replace(escapeCharRegex, '$1');
    } else if (expression) {
      match = expression.trim();
    }

    result.push(match);

    return subString;
  });

  return result;
};

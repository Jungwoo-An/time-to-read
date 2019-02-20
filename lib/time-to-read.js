import { cjkRegex, defaultValues } from './constants';

/**
 * @param {string} content
 * @returns {number}
 */
function getWordCount(content) {
  var matched = content.match(/\w+/g);
  if (!matched) {
    return 0;
  }

  return matched.length;
}

/**
 * @param {string} content
 * @returns {number}
 */
function getCjkCharacterCount(content) {
  var matched = content.match(cjkRegex);
  if (!matched) {
    return 0;
  }

  return matched.length;
}

/**
 * @description Estimate reading time
 * @param {string} content
 * @param {object} [options]
 * @param {number} [options.wpm=270] word per minutes
 * @param {number} [options.cjkCpm=500]
 * @returns {number}
 */
export default function(content, options) {
  if (!options) {
    options = Object.assign(defaultValues, options);
  }

  var wordCount = getWordCount(content);
  var perWord = (60 * 1000) / options.wpm;

  var cjkCount = getCjkCharacterCount(content);
  var perCharacter = (60 * 1000) / options.cjkCpm;

  var readingTime =
    Math.floor(wordCount * perWord) + Math.floor(cjkCount * perCharacter);

  return readingTime;
}

const timeToRead = require('../dist/time-to-read');

test('should be english words count is 3', () => {
  const { wordCount, cjkCount } = timeToRead('A B C');

  expect(wordCount).toBe(3);
  expect(cjkCount).toBe(0);
});

test('should be cjk characters count is 3', () => {
  const { wordCount, cjkCount } = timeToRead('가나다');

  expect(wordCount).toBe(0);
  expect(cjkCount).toBe(3);
});

test('should be english word count is 3 and cjk characters count is 3', () => {
  const { wordCount, cjkCount } = timeToRead('A B C 가나다');

  expect(wordCount).toBe(3);
  expect(cjkCount).toBe(3);
});

test('should be able to custom option', () => {
  const { readingTime, enReadingTime, cjkReadingTime } = timeToRead(
    'A B C 가나다',
    {
      wpm: 60,
      cjkCpm: 60,
    },
  );

  expect(readingTime).toBe(6000);
  expect(enReadingTime).toBe(3000);
  expect(cjkReadingTime).toBe(3000);
});

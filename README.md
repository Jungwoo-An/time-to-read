## Time To Read

입력 받은 콘텐츠에서 읽기 시간을 측정합니다.

### 설치

```bash
npm install --save time-to-read
```

### 사용 방법

```js
const timeToRead = require('time-to-read');

timeToRead('text');
timeToRead('text', options);
```

#### Option (optional)

| 이름   | 타입   | 기본 값 (default) | 설명                    |
| ------ | ------ | ----------------- | ----------------------- |
| wpm    | number | 265               | 분당 단어 수 (English)  |
| cjkCpm | number | 500               | 분당 character 수 (CJK) |

#### Output

| 이름           | 타입   | 설명             |
| -------------- | ------ | ---------------- |
| readingTime    | number | 측정된 읽기 시간 |
| enReadingTime  | number | 영문 읽기 시간   |
| cjkReadingTime | number | CJK 읽기 시간    |
| wordCount      | number | 영어 단어 수     |
| cjkCount       | number | CJK character 수 |

### 참고 자료

- [Medium](https://help.medium.com/hc/en-us/articles/214991667-Read-time)
- [Wikipedia](<https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_(Unicode_block)>)

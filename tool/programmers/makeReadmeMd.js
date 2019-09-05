const fs = require('fs');

const axios = require('axios');
const { JSDOM } = require('jsdom');

const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

// turndown 셋팅
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
});
turndownService.use(turndownPluginGfm.gfm);
turndownService.addRule('header', {
  filter: ['h5', 'h6'],
  replacement: content => {
    return '## ' + content;
  },
});
turndownService.addRule('q', {
  filter: ['q'],
  replacement: content => {
    return '"' + content + '"';
  },
});
turndownService.addRule('pre', {
  filter: ['pre'],
  replacement: content => {
    return '```\n' + content.trim() + '\n```';
  },
});

// 문제 가져오기
async function getProblem(link) {

  // 문제 링크 요청
  let response = await axios.get(link, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
    },
  });

  // DOM 파싱
  const dom = new JSDOM(response.data);
  const document = dom.window.document;
  let title = document.querySelector('.algorithm-title').textContent.trim();
  let guide = document.querySelector('.guide-section').innerHTML;

  // 문제 설명, HTML => Markdown
  guide = turndownService.turndown(guide);

  return {
    title,
    guide,
  };

}

// 콘솔 매개변수 가져오기
const args = process.argv.slice(2);
const level = args[0];
const name = args[1];
const lang = args[2];
const link = args[3];

const langExtToLangName = {
  'c': 'C',
  'cpp': 'C++',
  'cs': 'C#',
  'go': 'Go',
  'java': 'Java',
  'js': 'JavaScript',
  'kt': 'Kotlin',
  'py': 'Python3',
  'rb': 'Ruby',
  'scala': 'Scala',
  'swift': 'Swift',
  'sql': 'SQL',
};

async function app() {

  // 문제 가져오기
  let problem = await getProblem(link);

  // README.md 내용 생성
  let readmeMd = `# ${problem.title}\n`
    + `\n`
    + `## 출처\n`
    + `\n`
    + `프로그래머스 코딩 테스트 연습 - ${problem.title}, ${link}\n`
    + `\n`
    + problem.guide
    + `\n`
    + `\n`
    + `## 풀이\n`
    + `\n`
    + `[${langExtToLangName[lang]}](./${name}.${lang})\n`;

  // 디렉토리 및 파일 생성
  let path = `../../programmers.co.kr/level${level}/${name}`;
  fs.mkdirSync(path);
  fs.writeFileSync(`${path}/README.md`, readmeMd);
  fs.writeFileSync(`${path}/${name}.${lang}`, '');

}
app();

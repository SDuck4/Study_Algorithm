/*
    https://www.codewars.com/kata/decode-the-morse-code

    이 카타에서 당신은 간단한 모스부호 디코더를 만들어야 합니다.
    요즘에는 대부분 음성이나 디지털 신호로 대체되었지만, 모스부호는 전세계적으로 몇몇 곳에서 여젼히 사용되고 있습니다.
    모스부호는 모든 문자를 연속적인 "점"과 "대시"로 인코딩합니다.
    예를 들어, A는 ·−, Q는 −−·−, 숫자 1은 ·−−− 로 인코딩됩니다.
    또한 대소문자 구분을 하지않고, 전통적으로 대문자로 사용됩니다.
    모스부호로 메시지를 작성할 때, 공백 1개는 부호를 구분하기 위해 사용되고, 공백 3개는 단어를 구분하기 위해 사용합니다.
    예를 들어, HEY JUDE 는 모스부호로 ···· · −·−−   ·−−− ··− −·· · 입니다.

    메모: 메시지 앞뒤의 공백은 의미가 없으니 무시해야 합니다.

    글자, 숫자, 문장부호 뿐만 아니라 모스부호에는 몇가지 특수코드가 있습니다.
    그중 가장 유명한 코드인 국제 조난 신호 SOS는 ···−−−··· 입니다. (타이타닉을 통해 잘 알려져 있죠)
    이런 특수코드는 하나의 특수한 문자로 간주하며, 하나의 단어로 분리해 전송해야합니다.

    당신의 과제는 모스부호를 입력받아 사람이 읽을 수 있는 문자열로 반환해주는 함수 decodeMorse(morseCode) 를 구현하는 것입니다.

    예시:
    decodeMorse('.... . -.--   .--- ..- -.. .')
    // 문자열 "HEY JUDE" 를 반환해야 합니다

    모스부호표는 자유롭게 사용할 수 있게 딕셔너리 형태로 제공됩니다.
    CoffeeScript, C++, Go, JavaScript, PHP, Python, Ruby, TypeScript : MORSE_CODE['.--']
    Java : MorseCode.get('.--')
    C# : MorseCode.Get('.--')
    Haskell : morseCodes ! ".--"
    Elixir : morse_codes

    모든 테스트케이스는 유효한 케이스이므로, 에러나 예외처리는 생략하셔도 됩니다.
    C# 에서는 정답 코드가 예외를 던지면 테스트가 실패하므로 주의해주세요.

    행운을 빕니다!

    이 카타를 완료한 다음, '모스부호 디코드 고급' 카타도 도전해보세요.
*/

const MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z'
};

function decodeMorse(morseCode) {
    let cntSpace = 0;
    return morseCode.trim().split(' ').reduce((p, c) => {
        if (c === '') {
            cntSpace++;
            if (cntSpace === 2) p += ' ';
        } else {
            cntSpace = 0;
            p += MORSE_CODE[c];
        }
        return p;
    }, '');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
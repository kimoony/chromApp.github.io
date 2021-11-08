const quotes = [
  {
    quote: "나의 영혼이 잠잠히 하나님만 바람이여 나의 구원이 그에게서 나오는도다.",
    bibleVerse: "시편 62편 1절"
  },
  {
    quote: "수고하고 무거운 짐 진자들아 다 내게로 오라 내가 너희를 쉬게 하리라.",
    bibleVerse: "마태복음 11장 28절"
  },
  {
    quote: "사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라.",
    bibleVerse: "잠언 16장 9절"
  },
  {
    quote: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라.",
    bibleVerse: "욥기 23장 10절"
  },
  {
    quote: "여호와는 나의 목자시니 내게 부족함이 없으리로다.",
    bibleVerse: "시편 23편 1절"
  },
  {
    quote: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라.",
    bibleVerse: "빌립보서 4장 6절"
  },
  {
    quote: "항상 기뻐하라 쉬지말고 기도하라 범사에 감사하라 이것이 그리스도 예수안에서 너희를 향하신 하나님의 뜻이니라.",
    bibleVerse: "데살로니가전서 5장 16 ~ 18절"
  },
  {
    quote: "내게 능력주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
    bibleVerse: "빌립보서 4장 13절"
  },
  {
    quote: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다.",
    bibleVerse: "시편 119편 105절"
  },
  {
    quote: "여호화께 감사하라 그는 선하시며 그의 인자하심이 영원함이로다.",
    bibleVerse: "시편 108편 29절"
  },
];

const quote = document.querySelector('#quote span:first-child');
const bibleVerse = document.querySelector('#quote span:last-child');


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]


quote.innerText = todaysQuote.quote;
bibleVerse.innerText = todaysQuote.bibleVerse;

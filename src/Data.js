export const users = [
  {
    id: 190238,
    name: "Mahmoud Shaban",
    avatar: "https://i.pravatar.cc/48?u=933372",
    email: "ms90807040@gmail.com",
    password: "mahmoud123+-*",
  },
];

export let cards = {
  ownerId: 190238,
  words: [
    {
      wordID: 1,
      word: "Unintentionally ",
      type: "adverp",
      definition: "in a way that is not deliberate, but happens by accident",
      example:
        "Want to know the shortest word that can unintentionally provoke defensiveness in others? Why?",
      photo: "https://i.pravatar.cc/48?u=933372",
      level: "hard",
      date: "1691933102801",
    },
    {
      wordID: 2,
      word: "Provoke",
      type: "verp",
      definition: "to cause a particular reaction or have a particular effect",
      example:
        "Want to know the shortest word that can unintentionally provoke defensiveness in others? Why?",
      photo: "https://i.pravatar.cc/48?u=2334",
      level: "new",
      date: "1691933361641",
    },
    {
      wordID: 3,
      word: "Defensiveness",
      type: "noun",
      definition:
        "the fact of showing that you feel people are criticizing you",
      example:
        "Want to know the shortest word that can unintentionally provoke defensiveness in others? Why?",
      photo: "https://i.pravatar.cc/48?u=545784",
      level: "easy",
      date: "1691933193520",
    },
    {
      wordID: 4,
      word: "Provocative",
      type: "adjective",
      definition:
        "intended to make people angry or upset; intended to make people argue about something",
      example:
        "This word is provocative and it can put people on the defensive.",
      photo: "https://i.pravatar.cc/48?u=435436",
      level: "good",
      date: "1691932983113",
    },
    {
      wordID: 5,
      word: "Indicate",
      type: "verp",
      definition: "to show that something is true or exists",
      example:
        "Our research, along with others, indicates that Adaptability is a top skill desired by employers.",
      photo: "https://i.pravatar.cc/48?u=89745",
      level: "new",
      date: "1691933287817",
    },
  ],
};
console.log(cards);

export const updateTheLevelOfCard = async (cardId, level) => {
  cards = {
    ...cards,
    words: cards.words.map((word) => {
      if (word.wordID === cardId) {
        return { ...word, level, date: Date.now() };
      }
      return word;
    }),
  };
};
const compareDates = (a, b) => {
  const dateA = a.date;
  const dateB = b.date;
  return dateA - dateB;
};

const priorityOrder = ["new", "easy", "good", "hard"];

const compareStrings = (a, b) => {
  const indexA = priorityOrder.indexOf(a.level);
  const indexB = priorityOrder.indexOf(b.level);
  return indexA - indexB;
};
export const getWords = () =>
  cards.words.sort(compareDates).sort(compareStrings);

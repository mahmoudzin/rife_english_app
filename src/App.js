import { useCallback, useEffect, useState } from "react";
import { getWords, updateTheLevelOfCard } from "./Data";
import Statics from "./components/Static";
import LastCards from "./components/CardsList";
import Goal from "./components/Goal";
import RandomWord from "./components/RandomWord";
import Strengthen from "./components/Strengthen";

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
function NavBar() {
  return (
    <nav className="bg-primary w-full flex items-center justify-between py-2 px-4">
      <div className="flex items-center">
        <div className="mr-10">
          <h1>Rife App</h1>
          <p>Reamber it for ever</p>
        </div>

        <div className="hidden sm:flex">
          <button className="flex items-center text-lg rounded-md transition ease-in-out delay-150 bg-secondary py-1 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <div className="mr-2">+</div> Add
          </button>
          <button className="ml-3 flex items-center text-lg rounded-md transition ease-in-out delay-150 bg-secondary py-1 px-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            💧 Study
          </button>
        </div>
      </div>
      <div className="cursor-pointer">
        <img
          className="w-10 h-10 rounded-full mx-auto"
          src="https://i.pravatar.cc/48?u=933372"
          alt=""
        />
      </div>
    </nav>
  );
}

function Main({ children }) {
  return <main className="container mx-auto pt-10">{children}</main>;
}

function App() {
  const [words, setWords] = useState([]);
  useEffect(() => {
    setWords(getWords());
  }, []);

  const updateTheLevelofCard = useCallback(
    (cardId, level) => {
      const newWords = words
        .map((word) => {
          if (word.wordID === cardId) {
            return { ...word, level, date: Date.now() };
          }
          return word;
        })
        .sort(compareDates)
        .sort(compareStrings);
      setWords(newWords);
      updateTheLevelOfCard(cardId, level);
    },
    [words]
  );
  return (
    <div>
      <NavBar />
      <Main>
        <Statics>
          <Goal />
          <RandomWord {...{ words, updateTheLevelofCard }} />
        </Statics>
        <Strengthen words={words} />
        <LastCards words={words} />
      </Main>
    </div>
  );
}

export default App;

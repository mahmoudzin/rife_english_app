import { useState } from "react";
import Button from "./Button";

export default function RandomWord({ words, updateTheLevelofCard }) {
  const [index, setIndex] = useState(0);
  const [isUnRemeber, setIsUnRemeber] = useState(false);

  const changedWordRandomily = () =>
    setIndex(Math.floor(Math.random() * words.length));
  const updateTheLevel = (wordID, level) => {
    updateTheLevelofCard(wordID, level);
    setIsUnRemeber(false);
    setIndex((prevState) => {
      let x = Math.floor(Math.random() * words.length);
      do {
        if (x !== prevState) return x;
        else x = Math.floor(Math.random() * words.length);
      } while (x === prevState);
    });
    changedWordRandomily();
  };
  return (
    <>
      {words.length > 0 && (
        <div
          className="md:pl-3 w-full md:w-1/2 xl:w-1/4 mt-4 md:mt-0"
          style={{ minHeight: "250px" }}
        >
          <div className="bg-background-500 p-4 rounded-md h-full text-center flex flex-col justify-between">
            <h2 className="text-primary">🧠 Random Word 🧠</h2>
            <div className="mt-6">
              {isUnRemeber ? (
                <h3>The Word Is</h3>
              ) : (
                <img
                  src={words[index].photo}
                  className="w-24 h-24 inline-block"
                  alt={words[index].word}
                />
              )}

              <p className="mt-3">
                {isUnRemeber ? words[index].word : words[index].definition}
              </p>
            </div>
            <div className="mt-3">
              {!isUnRemeber ? (
                <>
                  <Button
                    style={{ marginRight: "12px" }}
                    onClick={() => changedWordRandomily()}
                  >
                    Change
                  </Button>
                  <Button onClick={() => setIsUnRemeber(true)}>Remeber</Button>
                </>
              ) : (
                <>
                  <Button
                    className="easy-bg-color py-1 px-3 mr-2 text-white rounded"
                    onClick={() => updateTheLevel(words[index].wordID, "easy")}
                  >
                    Easy
                  </Button>
                  <Button
                    className="good-bg-color py-1 px-3 mr-2 text-white rounded"
                    onClick={() => updateTheLevel(words[index].wordID, "good")}
                  >
                    Good
                  </Button>
                  <Button
                    className="hard-bg-color py-1 px-3 text-white rounded"
                    onClick={() => updateTheLevel(words[index].wordID, "hard")}
                  >
                    Difficult
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * the screen steps:
 * 1- show the word randomely
 * 2- when click on button show the loading status
 * 3- show the word with animation
 * 4- after 30 second show anther word
 */
// const card = {
//   word: "Unintentionally ",
//   type: "adverp",
//   definition: "in a way that is not deliberate, but happens by accident",
//   example:
//     "Want to know the shortest word that can unintentionally provoke defensiveness in others? Why?",
//   photo: "https://i.pravatar.cc/48?u=933372",
//   level: "new",
//   date: "1691932983113",
// };

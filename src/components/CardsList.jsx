import { useCallback, useState } from "react";
import GridData from "./Grid";
import "./index.scss";
import Button from "./Button";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

export default function LastCards({ words }) {
  const [isVisible, setIsVisible] = useState({
    show: false,
    item: null,
  });
  const [editMode, setEditMode] = useState(false);

  const getId = useCallback((id) => {
    setIsVisible({
      show: true,
      item: words.find((word) => word.wordID === id),
    });
  }, []);
  const close = useCallback(() => {
    setIsVisible({
      show: false,
      item: null,
    });
  }, []);
  return (
    <div className="mt-10">
      <h2 className="text-primary">The Last Five Words</h2>
      <GridData
        tableItems={words.map((card) => ({
          id: card.wordID,
          photo: <img src={card.photo} className="w-24 h-24" alt={card.word} />,
          word: (
            <div>
              <h4 className="text-lg text-primary">{card.word}</h4>
              <p className="pt-3">{card.definition}</p>
            </div>
          ),
          type: <p className="text-center">{card.type}</p>,
          example: <p className="">{card.example}</p>,
          level: (
            <div
              className={
                card.level === "new"
                  ? "new-color"
                  : card.level === "easy"
                  ? "easy-color"
                  : card.level === "good"
                  ? "good-color"
                  : card.level === "hard"
                  ? "hard-color"
                  : ""
              }
            >
              {card.level}
            </div>
          ),
        }))}
        onClick={getId}
      />
      {isVisible.show && (
        <div
          onClick={close}
          className="model-parant fixed z-0 top-0 left-0 min-h-screen w-full flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="model-child p-2 relative rounded-md bg-background-900 md:w-1/3 md:flex md:flex-row-reverse md:justify-between"
          >
            <div className="absolute right-2 top-2 flex items-center">
              <Button
                onClick={() => setEditMode((prevState) => !prevState)}
                className="mr-3 text-lg text-green-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {editMode ? (
                  <BiSolidShow className="fill-orange-200" />
                ) : (
                  <FaEdit className="fill-green-200" />
                )}
              </Button>
              <Button onClick={close}>x</Button>
            </div>

            {/* Word Image */}
            <div className="md:w-1/2 md:text-right px-2 md:py-11">
              <img
                src={isVisible.item?.photo}
                class="inline-block w-full"
                alt=""
              />
            </div>
            {/* Word Data */}
            <div className="md:w-1/2">
              <span
                className={`rounded-full ${isVisible.item.level}-pill inline-block px-3 py-1 mb-2`}
              >
                {isVisible.item.level}
              </span>
              {editMode ? (
                <>
                  <input
                    className="block bg-transparent font-bold text-lg s-font text-white"
                    value={isVisible.item.word}
                  />
                  <input
                    className="block bg-transparent "
                    value={isVisible.item.type}
                  />
                  <textarea
                    className="block bg-transparent "
                    value={isVisible.item.definition}
                  />
                  <textarea
                    className="block bg-transparent "
                    value={isVisible.item.example}
                  />
                </>
              ) : (
                <>
                  <h3>{isVisible.item.word}</h3>
                  <p>{isVisible.item.type}</p>
                  <p>{isVisible.item.definition}</p>
                  <p>{isVisible.item.example}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

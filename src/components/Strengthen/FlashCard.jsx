import { useState, useRef } from "react";
import Button from "../Button";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function FlachCard({ words }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setFlip] = useState(false);
  const end = words.length;

  const cardRef = useRef(null);

  const nextCard = () => {
    if (cardRef.current && index !== end - 1) {
      setFlip(false);
      setIndex((prevIndex) => prevIndex + 1);
      cardRef.current.classList.add("flash-next-card-animation"); // Add the animation class

      setTimeout(() => {
        cardRef.current.classList.remove("flash-next-card-animation"); // Remove the animation class after the desired duration
      }, 120); // Duration in milliseconds (1 second)
    }
  };
  const prevCard = () => {
    if (cardRef.current && index !== 0) {
      setFlip(false);
      setIndex((prevIndex) => prevIndex - 1);
      cardRef.current.classList.add("flash-prev-card-animation"); // Add the animation class

      setTimeout(() => {
        cardRef.current.classList.remove("flash-prev-card-animation"); // Remove the animation class after the desired duration
      }, 120); // Duration in milliseconds (1 second)
    }
  };

  return (
    <>
      {words && words.length > 0 ? (
        <div
          className="w-full md:w-2/3 overflow-hidden order-1 md:order-2"
          style={{ perspective: "600px" }}
        >
          {/* The Flach card */}
          <Card {...{ words, index, setFlip, isFlipped, cardRef }} />
          {/* Control */}
          <Controller {...{ end, index, prevCard, nextCard }} />
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
function Card({ words, index, setFlip, isFlipped, cardRef }) {
  return (
    <div
      onClick={() => {
        setFlip((prevState) => !prevState);
      }}
      ref={cardRef}
      className={` flip-card ${
        isFlipped ? "flipped" : ""
      } bg-background-500 h-80 px-2 py-3  cursor-pointer hover:bg-gray-700 transition-colors`}
    >
      <div className="flip-card-inner">
        <FaceOfCard {...{ word: words[index], face: "front" }}>
          <p className="font-medium">{words[index].definition}</p>
        </FaceOfCard>
        <FaceOfCard {...{ word: words[index], face: "back" }}>
          <p className="text-lg font-medium mb-4">{words[index].word}</p>
          <p>Ex: {words[index].example}</p>
        </FaceOfCard>
      </div>
    </div>
  );
}
function Controller({ end, index, prevCard, nextCard }) {
  return (
    <div className="flex justify-center items-center w-full mt-4">
      <Button
        onClick={() => {
          prevCard();
        }}
        className="flex justify-center items-center rounded-full h-8 w-8 border border-primary"
      >
        <BiLeftArrowAlt />
      </Button>
      <div className="mx-2">
        {index + 1} ... {end}
      </div>
      <Button
        onClick={() => {
          nextCard();
        }}
        className="flex justify-center items-center rounded-full h-8 w-8 border border-primary"
      >
        <BiRightArrowAlt />
      </Button>
    </div>
  );
}

function FaceOfCard({ word, face, children }) {
  return (
    <div className={`flip-card-${face} flex justify-between items-center`}>
      <div className="w-1/2 text-center">{children}</div>
      <div className="w-1/2 text-center">
        <img
          className="inline-block h-40"
          src={word.photo}
          alt={word.definition}
        />
      </div>
    </div>
  );
}

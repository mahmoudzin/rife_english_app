import "./index.scss";
import FlachCard from "./FlashCard";
import Statics from "./Static";

export default function Strengthen({ words }) {
  return (
    <div className="py-4 mb-4">
      <h2 className="text-center text-primary mb-4">
        🔥 Strength your memory with Flach Cards 🔥
      </h2>
      <div className="row flex flex-wrap ">
        <Statics />
        <FlachCard words={words} />
      </div>
    </div>
  );
}

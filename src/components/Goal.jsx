import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Button from "./Button";

function GoalHeader({ goal, disabled, setDisabled }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-primary">Today Goal🌱</h2>
      <Button
        onClick={() => {
          if (goal.new === 0) alert("You Can't set goal to zero!");
          else setDisabled((prevState) => !prevState);
        }}
        className="flex items-center text-lg text-green-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        {disabled ? <FaEdit className="fill-green-200" /> : "done"}
      </Button>
    </div>
  );
}

function GoalBody({ goal, setGoal, disabled, setDisabled }) {
  return (
    <div className="mt-4">
      <p className="mb-2">
        ☘️ New Word:
        <input
          value={goal.new}
          onChange={(e) => {
            e.preventDefault();
            setGoal({
              new: /^\d+$/.test(e.target.value) ? parseInt(e.target.value) : 0,
              review: isNaN(e.target.value)
                ? 0
                : parseInt(e.target.value) < 10
                ? parseInt(e.target.value) * 2
                : parseInt(e.target.value * 1.5),
            });
          }}
          className={`ml-2 outline-none ${disabled && "bg-transparent"}`}
          disabled={disabled}
          autoFocus={!disabled}
        />
      </p>
      <p>🦾 Review: {goal.review}</p>
    </div>
  );
}
function GoalProgress({ studied, percentage }) {
  return (
    <div className="mt-4 text-right">
      {studied === 0 ? (
        <Button>Start Study</Button>
      ) : (
        <div className="w-full bg-background-100 rounded-full">
          <div
            className="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${percentage}%` }}
          >
            {parseInt(percentage)}%
          </div>
        </div>
      )}
    </div>
  );
}
export default function Goal() {
  const [goal, setGoal] = useState({ new: 5, review: 10 });
  const [disabled, setDisabled] = useState(true);
  const [studied, setStudied] = useState(0);
  let percentage = (studied / (goal.new + goal.review)) * 100;
  return (
    <div className="md:pr-3 w-full md:w-1/2 xl:w-3/4">
      <div className="bg-background-500 p-4 rounded-md h-full flex flex-col justify-between">
        {/* Goal Header */}
        <GoalHeader {...{ goal, disabled, setDisabled }} />
        {/* Goal data and inputs */}
        <GoalBody {...{ goal, setGoal, disabled, setDisabled }} />
        {/* goal progress */}
        <GoalProgress {...{ studied, percentage }} />
      </div>
    </div>
  );
}

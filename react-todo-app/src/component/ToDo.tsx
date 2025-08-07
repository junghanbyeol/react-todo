import React from "react";
import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name)
    const {
      currentTarget: {name}
    } = event
    setToDos(oldToDos => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
      const oldToDo = oldToDos[targetIndex]
      const newToDo = { text, id, category: name}
      return oldToDos
    })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>Doing</button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>Doing</button>
      )}
    </li>
  );
}

export default ToDo;

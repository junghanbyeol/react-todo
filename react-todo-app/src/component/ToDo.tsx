import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.name)
    const {
      currentTarget: {name}
    } = event
    setToDos((prevToDos) => {
      console.log('prevToDos', prevToDos)
      return prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, category: name as any } : toDo
      );
    });

    // setToDos(oldToDos => {
    //   const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
    //   const oldToDo = oldToDos[targetIndex]
    //   const newToDo = { text, id, category: name as any}
    //   return [
    //     ...oldToDos.slice(0, targetIndex),
    //     newToDo,
    //     ...oldToDos.slice(targetIndex + 1)
    //   ]
    // })
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING + ''} onClick={onClick}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO + ''} onClick={onClick}>ToDo</button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE + ''} onClick={onClick}>Done</button>
      )}
    </li>
  );
}

export default ToDo;

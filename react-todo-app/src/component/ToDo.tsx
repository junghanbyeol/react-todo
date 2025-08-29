import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";
import { Card, CardTitle, Actions, IconBtn } from "../style/kanbanStyles";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setToDos((prev) => prev.map((t) => (t.id === id ? { ...t, category: name as any } : t)));
  };

  return (
    <Card>
      <CardTitle>{text}</CardTitle>
      <Actions>
        {category !== Categories.DOING && (
          <IconBtn variant="doing" name={Categories.DOING} onClick={onClick}>하는 중</IconBtn>
        )}
        {category !== Categories.DONE && (
          <IconBtn variant="done" name={Categories.DONE} onClick={onClick}>다했어</IconBtn>
        )}
        {category !== Categories.TO_DO && (
          <IconBtn name={Categories.TO_DO} onClick={onClick}>할래</IconBtn>
        )}
        <IconBtn variant="delete" onClick={()=>setToDos((prev)=>prev.filter(t=>t.id!==id))}>지울래</IconBtn>
      </Actions>
    </Card>
  );
}
export default ToDo;

import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "../atoms";
import { AddBtn, Input } from "../style/kanbanStyles";

interface IForm { toDo: string; }
function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((old)=> [{ text: toDo, id: Date.now(), category }, ...old]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)} style={{display:"contents"}}>
      <Input {...register("toDo", { required: true })} placeholder="추가 할 내용 입력" />
      <AddBtn type="submit">＋</AddBtn>
    </form>
  );
}
export default CreateToDo;

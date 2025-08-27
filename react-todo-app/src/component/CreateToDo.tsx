import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import { categoryState } from './../atoms';

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const category = useRecoilValue(categoryState)
    const handleValid = ({toDo}: IForm) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category}, ...oldToDos])
        setValue("toDo", '')
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {required: "필수입력 항목입니다."})}placeholder="Write a to do" />
            <button>Add</button>
        </form>
    )
}

export default CreateToDo;
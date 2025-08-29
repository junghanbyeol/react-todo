import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { Categories, categoryState, toDoSelector } from "../atoms";
import ToDo from "./ToDo";
import {
  Header, Title, InputGroup, Board, Column, ColumnHead, CardList
} from "../style/kanbanStyles";

function ToDoList() {
  // const toDos = useRecoilValue(toDoSelector);
  const [to_do, doing, done] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) =>
    setCategory(e.currentTarget.value as any);

  // 실제 제품에서는 셀렉트 대신 컬럼 3개에 필터링된 배열을 뿌리면 됩니다.
  return (
    <>
      <Header>
        <Title>To Do List</Title>
        <InputGroup style={{gridColumn:"1 / -1"}}>
          {/* CreateToDo 내부에서 input/button만 렌더하면 스타일 자동 적용 */}
          <CreateToDo />
        </InputGroup>
      </Header>

      {/* 데모용 - 현재 selector 1개이므로 컬럼 1개에만 표시됨 */}
      <Board>
        <Column>
          <ColumnHead>
            <h2>할 일</h2><span className="count">{to_do.length}</span>
          </ColumnHead>
          <CardList>{to_do.map((t)=> <ToDo key={t.id} {...t} />)}</CardList>
        </Column>
        <Column>
          <ColumnHead>
            <h2>하는 중</h2><span className="count">{doing.length}</span>
          </ColumnHead>
          <CardList>{doing.map((t)=> <ToDo key={t.id} {...t} />)}</CardList>
        </Column>
        <Column>
          <ColumnHead>
            <h2>끝!</h2><span className="count">{done.length}</span>
          </ColumnHead>
          <CardList>{done.map((t)=> <ToDo key={t.id} {...t} />)}</CardList>
        </Column>
      </Board>

      {/* 기존 카테고리 셀렉트는 기능 유지 시 아래처럼 별도 보관 가능 */}
      {/* <div style={{maxWidth:960, margin:"24px auto 80px", opacity:.6}}>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </div> */}
    </>
  );
}
export default ToDoList;

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"; // 선택 사용 가능

export type ToDoCategory = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  text: string;
  id: number;
  category: ToDoCategory;
}

interface ToDoState {
  toDos: IToDo[];
  addToDo: (text: string) => void;
  updateToDoCategory: (id: number, category: ToDoCategory) => void;
  // 필요 시 삭제/정렬/필터 등도 추가
}

export const useTodoStore = create<ToDoState>()(
  // devtools/persist는 선택입니다. 원치 않으면 create<ToDoState>((set, get) => ({...}))로만 작성
  devtools(
    persist(
      (set, get) => ({
        toDos: [],
        addToDo: (text) =>
          set((state) => ({
            toDos: [{ text, id: Date.now(), category: "TO_DO" }, ...state.toDos],
          })),
        updateToDoCategory: (id, category) =>
          set((state) => ({
            toDos: state.toDos.map((t) => (t.id === id ? { ...t, category } : t)),
          })),
      }),
      { name: "todo-store" } // localStorage key
    )
  )
);

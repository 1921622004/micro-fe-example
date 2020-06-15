import { atom } from "recoil";

const todoState = atom({
  key: 'todo_list',
  default: []
})

export default todoState
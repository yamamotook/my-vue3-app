const KEY = "to_do_strorage";
import { TodoItem } from '../interface/Todo'

export function addItems(todoList: TodoItem[]): void {
  window.localStorage.setItem(KEY , JSON.stringify(todoList))
  
}
export function getItems(): TodoItem[] {
  const storeStr = window.localStorage.getItem(KEY);
  if (storeStr) {
    return JSON.parse(storeStr);
  } else {
    return [];
  }
}

export function generateId() : string{
    return Math.random().toString(36).substr(2)
}

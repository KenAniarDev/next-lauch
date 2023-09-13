declare global {
  namespace Domain {
    interface Todo {
      items: TodoItem[];
    }
    interface TodoItem {
      value: string;
    }
  }
}
export {};

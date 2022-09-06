const initState = [
  { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Exercise", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload]; //ghi thêm

 
    case "todoList/toggleTodoStatus":   //reducer của action này chỉ cần cập nhật complete,ko cần thay đổi ở selector - gạch ngang ngoài UI thì do AntDesign làm
      return state.map((todo) => //state riêng,ko pải global state
        todo.id === action.payload
          ? {...todo, completed : !todo.completed } //rải thằng todo con ra 1obj mới,cập nhật (ghi đè ) thằng completed chứ k phải else :
          : todo    //ko bằng vs dk trên thì vẫn trả về các todo còn lại
      );
    default:
      return state;
  }
};

export default todoListReducer;

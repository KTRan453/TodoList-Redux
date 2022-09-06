import { createSelector } from "reselect";

//useSelector k chỉ lấy state ,mà có thể lấy gia trị cụ thể trong state

// export const searchTextSelector = (state) =>state.filters.search;    //saerchTextSelector là fn,ko phải biến nhận giá trị
// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)
//     const todosRemaining = state.todoList.filter((todo) =>{ //th nào thoả dk trong callback thì dc đẩy vào arr mới => state => re-render
//         return todo.name.includes(state.filters.search)     //includes('') tìm vs chuỗi rỗng thì luôn trả ra true (chỉ áp dụng khi includes trỏ ra String)
//     })
//     return todosRemaining
// }

//craeteSelector
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritySelector = (state) => state.filters.priority;

//fn này lấy ra dữ liệu đã dc lọc - Đảm nhiệm luôn cả nv trả ra todoList
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, status, priority) => {
    //status trong filters

    console.log(status);
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length //nếu length > 1 or k có gì
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        //th todo nao đảm bảo 2 dk dưới này thì dc trả ra [] mới
        todo.name.includes(searchText) &&
        (status === "Completed"
          ? todo.completed // => true thì todo thoả 2dk include và cái này sẽ dc trả ra,false thì ko
          : !todo.completed) && //TH else if (status=="todo") => false convert ! thành true
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);

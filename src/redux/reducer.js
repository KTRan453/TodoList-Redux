import {combineReducers} from 'redux'
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodosSlice"




// const rootReducer = (state={},action) =>{   //empty obj để trả ra undefind => sài default param

//     return {
//         filters:filtersReducer(state.filters , action), //trỏ tới state mà gặp obj rỗng =>undefind => nó lấy initState tại file của nó
//         todoList:todoListReducer(state.todoList, action),
//     }
// }


const rootReducer = combineReducers({ //dùng combine thì truyền vào 2 cái đ.n hàm reducer thôi
    filters:filtersReducer,
    todoList:todoListReducer,
})
export default rootReducer
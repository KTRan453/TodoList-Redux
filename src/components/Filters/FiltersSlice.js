const initState = {
    search:'',
    status:'All',
    priority:[]

}

const filtersReducer = (state = initState,action) =>{

    switch(action.type){

        case 'filter/searchFilterChange':
            return {
                ...state,
                search:action.payload, //ghi đè cái cũ 
            }
        case 'filters/statusFilterChange':
            return {
                ...state,
                status:action.payload
            }
        case 'filters/priorityFilterChange':
            return {
                ...state,
                priority:action.payload,
            }
        default :
            return state;
    }
}

export default filtersReducer
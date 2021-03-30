const initialState = {
    cars: [],
    counter : 0
}

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {
                cars : state.cars.concat(action.payload),
                counter: state.counter + 1
            }
            break;
        case 'DELETE':
            const cars = state.cars.filter((car, i) => {
                return i !== action.payload;
            })
            return {
                cars : cars,
                counter: state.counter - 1
            }
            break;
        default:
            return state;
    }
}
export default cartReducer;



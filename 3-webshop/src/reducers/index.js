export const storage = {
    products: [],
    dataStatus: '', // done, pending, error, nodata
}

export const reducer = (state = storage, action) => {
    switch (action.type) {
        case 'DONE':
            state = {
                ...state,
                products: action.payload,
                dataStatus: 'done'
            }
            return state;
        case 'NO_DATA':
            state = {
                ...state,
                products: [],
                dataStatus: 'nodata'
            }
            return state;

        default:
            return state;
    }
}
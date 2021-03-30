export function addCarToCart(car) {
    return {
        type: 'ADD',
        payload: car
    }
}

export function deleteFromCart(cartid) {
    return {
        type: 'DELETE',
        payload : cartid
    }
}
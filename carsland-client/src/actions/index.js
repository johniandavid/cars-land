export default function addCarToCart(car) {
    return {
        type: 'ADD',
        payload: car
    };
}
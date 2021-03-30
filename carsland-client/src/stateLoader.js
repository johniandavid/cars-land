export function loadState() {
    try {
        let serializedState = localStorage.getItem("cart");

        if (serializedState === null) {
            return {
            cars: [],
            counter: 0
            }
        }
        return JSON.parse(serializedState);

    } catch (err) {
        return {
            cars: [],
            counter: 0
        }
    }
}

export function saveState(state) {
    try {
        let serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);

    } catch (err) {
    }
}

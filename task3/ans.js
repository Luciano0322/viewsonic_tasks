import { call, put } from "redux-saga/effects";

function* function1(action) {
    const ctrl = new AbortController();  // Scoped locally
    const config = {
        method: "POST",
        url: "https://some-endpoint-url.com",
        data: action.payload,
        signal: ctrl.signal,
    };

    try {
        const { data } = yield call(/** a axios request with config */);
        yield put(/** reducer 1 */);
    } catch (e) {
        if (e.name === 'AbortError') {
            yield put(/** reducer 3 */); // Directly handle abort in catch block if preferred
        } else if (e.response) {
            const er = e.response;
            yield put(/** reducer 2 */);
        }
    } finally {
        // General cleanup, if needed
    }
}

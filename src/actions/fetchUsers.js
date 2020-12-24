const fetch_user = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        dispatch({
            type : "FETCH_USER",
            payload: res
        })
    })
}
export default fetch_user;

const url =  process.env.REACT_APP_BACKEND_API
export const getAllHttp = `${url}`;
export const getAllCompletedHttp = `${url}?completed=false`;
export const getAllInCompletedHttp = `${url}?completed=true`;
export const updateTodoHttp = `${url}/update`;
export const deleteTodoHttp = `${url}/del`;
export const addNewTodoHttp = `${url}/add`;
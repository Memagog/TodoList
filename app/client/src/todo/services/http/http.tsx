
const env = 'http://localhost:5000/todo'
export const getAllHttp = `${env}`;
export const getAllCompletedHttp = `${env}?completed=true`;
export const getAllInCompletedHttp = `${env}?completed=false`;
export const updateTodoHttp = `${env}/update`;
export const deleteTodoHttp = `${env}/del`;
export const addNewTodoHttp = `${env}/add`;
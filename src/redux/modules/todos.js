// import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";


export const add_todo = (payload) => {
    return {
      type: ADD_TODO,
      payload,
    }
}

export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}
export const  switch_todo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  }
}

const initialState = [
  {
    id: 1,
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id: 2,
    title: "제목2",
    body: "내용2",
    isDone: false,
  },
  {
    id: 3,
    title: "제목3",
    body: "내용3",
    isDone: false,
  },
  {
    id: 4,
    title: "제목4",
    body: "내용4",
    isDone: false,
  },
];


// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // 추가하기 
      return [...state, action.payload];     
       //TODO: 여기 작성
    case "DELETE_TODO":
      return state.filter(item => item.id !== action.payload);    
       //TODO: 여기 작성
    case "SWITCH_TODO":
      state.map((item) => {
          if(item.id !== action.payload) {
            return [{...item, isDone:true}]
          } 
      });
    default:
      return state;
  }
};

export default todos;

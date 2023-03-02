import { createAction } from "../utils/createAction";
import { MockPosts } from "../__mock__/mockPosts";

const initialState = MockPosts(10);
console.log(initialState);

export const ADD_POST = createAction("ADD_POST");
export const EDIT_POST = createAction("EDIT_POST");
export const DELETE_POST = createAction("DELETE_POST");

// redux에서는 state 매개변수에서 초기화도 같이해준다
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const myPostDetail = {
        title: action.payload.title,
        content: action.payload.content,
        User: {
          id: Math.floor(Math.random() * 10000),
          nickName: "글쓴이",
          profileImg:
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjRfODMg%2FMDAxNjY2NjA0NDI4MDc3.QsqZf0nKN2Nds_-KtXqc13Z4GFc97Lu3j7wG5XpzgVYg.62TZDVOPTYz3Yvn5J4LKCzZOVLqk5gnySCGH2rV6hZ4g.JPEG.seohyojin2009%2F20210607%25A3%25DF135112.jpg&type=sc960_832",
        },
        Comments: [],
        myPost: true,
      };
      return [ myPostDetail, ...state ];
      
    case "EDIT_POST":
      return;
    case "DELETE_POST":
      return;
    default:
      return state;
  }
};

export default reducer;

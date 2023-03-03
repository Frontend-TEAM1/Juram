import { createAction } from '../utils/createAction';
import { MockPosts } from '../__mock__/mockPosts';

const initialState = MockPosts(10);
console.log(initialState);

export const CREATE_POST = createAction('CREATE_POST');
export const EDIT_POST = createAction('EDIT_POST');
export const DELETE_POST = createAction('DELETE_POST');
export const ADD_COMMENT = createAction('ADD_COMMENT');
export const EDIT_COMMENT = createAction('EDIT_COMMENT');
export const DELETE_COMMENT = createAction('DELETE_COMMENT');

// redux에서는 state 매개변수에서 초기화도 같이해준다
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      console.log(action.payload.title);
      const myPostDetail = {
        id: Math.floor(Math.random() * 10000),
        title: action.payload.title,
        content: action.payload.content,
        User: {
          id: Math.floor(Math.random() * 10000),
          nickName: '글쓴이',
          profileImg:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjRfODMg%2FMDAxNjY2NjA0NDI4MDc3.QsqZf0nKN2Nds_-KtXqc13Z4GFc97Lu3j7wG5XpzgVYg.62TZDVOPTYz3Yvn5J4LKCzZOVLqk5gnySCGH2rV6hZ4g.JPEG.seohyojin2009%2F20210607%25A3%25DF135112.jpg&type=sc960_832',
        },
        Comments: [],
        myPost: true,
      };
      return [myPostDetail, ...state];

    case 'EDIT_POST':
      const editPostDetail = [...state];
      const editPostIdx = state.findIndex(
        (post) => post.id === action.payload.id
      );
      editPostDetail[editPostIdx].content = action.payload.content;
      return editPostDetail;

    case 'DELETE_POST':
      const remainList = state.filter(
        (post) => post.User.id !== action.payload.id
      );
      console.log(remainList);
      return remainList;

    case 'ADD_COMMENT':
      const newComment = {
        id: Math.floor(Math.random() * 10000),
        content: action.payload.content,
        User: {
          nickName: action.payload.name,
        },
        myComment: true,
      };
      const newCommentList = [...state];
      const addIdx = state.findIndex((post) => post.id === action.payload.id);
      newCommentList[addIdx].Comments.unshift(newComment);
      return newCommentList;

    case 'EDIT_COMMENT':
      const editCommentDetail = [...state];
      const editCommentIdx = state.findIndex(
        (post) => post.id === action.payload.id
      );
      const target = editCommentDetail[editCommentIdx].Comments.find(
        (com) => com.id === action.payload.commentId
      );
      target.content = action.payload.content;
      return editCommentDetail;

    case 'DELETE_COMMENT':
      const updateCommentList = [...state];
      const deleteIdx = state.findIndex(
        (post) => post.id === action.payload.id
      );
      const deletedList = updateCommentList[deleteIdx].Comments.filter(
        (comment) => comment.id !== action.payload.commentId
      );
      updateCommentList[deleteIdx].Comments = deletedList;
      return updateCommentList;

    default:
      return state;
  }
};

export default reducer;

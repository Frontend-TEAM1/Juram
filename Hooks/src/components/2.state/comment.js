import styled from "styled-components";

function Comment({ post }) {
  // console.log('+++++++++++++++++++++++++++++++++++', post.Comments)
  const comments = [...post.Comments];
  console.log(comments.find(()=>comments.myComment === true))

  return (
    <S.CommentItem>
      {/* 왜 한줄로 만들어야하지? */}
      {comments.myComment
        ? comments.map((com) => (
            <p>
              작성자: <span>{com.User.nickname}</span>
              <br />
              댓글 내용: <span>{com.content}</span>
              <br />
              <button>Edit</button><button>Delete</button>
            </p>
          ))
        : comments.map((com) => (
            <p>
              작성자: <span>{com.User.nickname}</span>
              <br />
              댓글 내용: <span>{com.content}</span>
            </p>
          ))}
      {/* {comments.map((com) => <p>댓글 내용: <span>{com.content}</span></p>)} */}
      {/* <S.MyCom>
        <button>Edit</button>
        <button>Delete</button>
      </S.MyCom> */}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const MyCom = styled.div`
  display: flex;
  align-items: center;
`;

const S = {
  CommentItem,
  MyCom,
};

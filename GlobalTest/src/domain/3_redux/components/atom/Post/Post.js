import Comment from "../Comment/Comment";
import CommentForm from "../Comment/Form";
import UserCard from "../UserCard/Card";

const Post = ({ post }) => {
  const editing = false;

  const onEditClick = () => {
    editing = !editing;
    if(editing) {}
  }

  return (
    <div style={{ border: "1px solid #999", paddingTop: '10px'}} >
      {post.myPost && <button type="button">수정</button>}
      {post.myPost && <button type="button">삭제</button>}
      <h2>--PostTitle--</h2>
      {editing ? <input name="title"/> : <h2>{post.title}</h2>}
      <UserCard user={post.User} />
      <h2>--PostContent--</h2>
      <p>{post.content}</p>
      <CommentForm />
      <div
        style={{
          display: "table",
          borderCollapse: "collapse",
          border: "1px solid #000",
        }}
      >
        {post.Comments &&
          post.Comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};
export default Post;

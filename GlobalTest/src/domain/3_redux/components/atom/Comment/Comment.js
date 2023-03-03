import { useState } from 'react';

const Comment = ({ comment, id, onEditComment, onDeleteComment }) => {
  const [editing, setEditing] = useState(false);
  let newCommentContent;

  const onEditClick = () => {
    setEditing((editing) => !editing);
    if (editing) {
      onEditComment(id, comment.id, newCommentContent);
    }
  };

  return (
    <div
      style={{
        border: '1px solid #000',
      }}>
      <h6>{comment.User.nickName}</h6>
      {editing ? (
        <textarea onChange={(e) => (newCommentContent = e.target.value)}>
          {comment.content}
        </textarea>
      ) : (
        <p>{comment.content}</p>
      )}
      {comment.myComment && (
        <button type='button' onClick={onEditClick}>
          {editing ? '저장' : '수정'}
        </button>
      )}
      {comment.myComment && (
        <button type='button' onClick={() => onDeleteComment(id, comment.id)}>
          삭제
        </button>
      )}
    </div>
  );
};
export default Comment;

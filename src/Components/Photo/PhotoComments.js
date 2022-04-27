import React from 'react';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
const PhotoComments = (props) => {
  console.log(props.single);
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(UserContext);
  const commenstSection = React.useRef(null);

  React.useEffect(() => {
    commenstSection.current.scrollTop = commenstSection.current.scrollHeight;
  }, [comments]);
  //
  //console.log(comments[1].comment_ID);
  //console.log(comments[1].comment_author);
  // console.log(comments[1].comment_content);

  return (
    <>
      <ul
        ref={commenstSection}
        className={`${styles.comments} ${props.single ? styles.single : ''} `}
      >
        {comments.map((comment) => (
          <li key={comment.comment_author}>
            <b>{comment.comment_author} :</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;

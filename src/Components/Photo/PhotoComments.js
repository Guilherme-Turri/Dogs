import React from 'react';

import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useSelector } from 'react-redux';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);

  const { data } = useSelector((state) => state.user);

  const commenstSection = React.useRef(null);

  React.useEffect(() => {
    commenstSection.current.scrollTop = commenstSection.current.scrollHeight;
  }, [comments]);

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
      {data && (
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

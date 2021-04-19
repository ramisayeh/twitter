import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import db from "../../../firebase";

const Likes = ({id}) => {
  const [likes, setLikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    db.collection("posts")
    .doc(id)
    .update({
      likes: likes,
    })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });

    setLikes(likes+1);
  };



  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
    />
  );
};
export default Likes;
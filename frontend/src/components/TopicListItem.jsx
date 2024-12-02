import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, id, setTopic } = props;

  const handleClick = () => {
    setTopic(id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{title}</span>
    </div>
  );
};

export default TopicListItem;

import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  const { topics, setTopic } = props; 
  const topicListArray = topics.map(topic => {
    return <TopicListItem key={topic.id} id={topic.id} title={topic.title} setTopic={setTopic}/>
  })
  return (
    <div className="top-nav-bar__topic-list">
      {topicListArray}
    </div>
  );
};

export default TopicList;

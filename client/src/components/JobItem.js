import React from "react";

const JobItem = () => {
  return (
    <a
      href="#!"
      onClick={(e) => e.preventDefault()}
      className="collection-item"
    >
      <span className="badge">3</span> Take out the trash
    </a>
  );
};

export default JobItem;

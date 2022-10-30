import React from "react";

function StackItem(props) {
  const { item, className } = props;

  return <div className={className}>{item}</div>;
}

export default StackItem;

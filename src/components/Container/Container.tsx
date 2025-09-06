import React from "react";

import "./Container.sass";

type Props = {
  children?: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }): React.JSX.Element => {
  return <div className="container">{children}</div>;
};

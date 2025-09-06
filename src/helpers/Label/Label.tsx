import React from "react";

import "./Label.sass";

type Props = {
  children: React.ReactNode;
  [key: string]: any;
};

export const Label: React.FC<Props> = ({
  children,
  ...rest
}): React.JSX.Element => {
  return <label {...rest}>{children}</label>;
};

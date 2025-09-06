import React from "react";

import "./Input.sass";

type Props = {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

export const Input: React.FC<Props> = ({
  handleChange,
  ...rest
}): React.JSX.Element => {
  return <input onChange={handleChange} {...rest} />;
};

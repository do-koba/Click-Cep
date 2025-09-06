import React from "react";

import "./Button.sass";

type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
};

export const Button: React.FC<Props> = ({
  children,
  onClick,
  ...rest
}): React.JSX.Element => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

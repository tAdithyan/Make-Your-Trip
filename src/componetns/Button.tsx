import React, { ReactNode } from 'react';

import { ButtonProps } from '../Typs';

const Button: React.FC<ButtonProps> = ({ buttonPress, children, style }) => {
  return (
    <div>
      <button className={`p-2 text-red-700 border  rounded-lg ${style}`} onClick={buttonPress}>
        {children}
      </button>
    </div>
  );
};

export default Button;

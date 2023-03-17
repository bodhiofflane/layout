import cn from 'classnames';

import {ButtonProps} from './Button.props';

import './button.scss';

const Button = ({appearense, children}: ButtonProps) => {
  return (
    <button
      className={cn('btn', {
        btn__primary: appearense === 'primary',
        btn__secondary: appearense === 'secondary',
      })}
    >
      {children}
    </button>
  );
};

export default Button;

import {DetailedHTMLProps, ButtonHTMLAttributes, ReactNode} from 'react';

export type ButtonProps = {
  appearense: 'primary' | 'secondary';
  children: ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
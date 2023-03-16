import {DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, ReactNode} from 'react';

export type NavigationProp = {
  children?: ReactNode;
} & DetailedHTMLProps<HtmlHTMLAttributes<HTMLElement>, HTMLElement>
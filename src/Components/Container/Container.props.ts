import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export type ContainerProps = {
  children?: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
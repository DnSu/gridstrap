import type { HTMLAttributes } from 'react';
import { joinClasses } from './utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export function Container({ className, fluid = false, ...props }: ContainerProps) {
  return (
    <div
      className={joinClasses(fluid ? 'container-fluid' : 'container', className)}
      {...props}
    />
  );
}

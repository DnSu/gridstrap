import type { HTMLAttributes } from 'react';
import type { AlignContent, JustifyContent } from './types';
import { joinClasses } from './utils';

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: JustifyContent;
  alignContent?: AlignContent;
}

export function Row({ className, justifyContent, alignContent, ...props }: RowProps) {
  return (
    <div
      className={joinClasses(
        'row',
        justifyContent ? `justify-content-${justifyContent}` : null,
        alignContent ? `align-content-${alignContent}` : null,
        className,
      )}
      {...props}
    />
  );
}

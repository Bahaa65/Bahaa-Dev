import * as React from "react";

type Props = React.HTMLAttributes<HTMLHeadingElement> & { as?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6' };

export function Heading({ as = 'h2', className = '', ...rest }: Props) {
  const Tag: React.ElementType = as;
  return <Tag className={`font-bold ${className}`} {...rest} />;
}



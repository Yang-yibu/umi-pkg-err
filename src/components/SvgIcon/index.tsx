import './index.less';

import React from 'react';
import IconMap from '@/icons';

export interface SvgIconProps {
  name: keyof typeof IconMap;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, size, className, style }) => {
  return (
    <span
      className={className ? `svgIcon ${className}` : 'svgIcon'}
      style={{ fontSize: size, ...style }}
    >
      {IconMap[name]()}
    </span>
  );
};

export default SvgIcon;

export const SvgIconExp: React.FC<SvgIconProps & { cmpName?: string }> = (props) => {
  const name = props.cmpName ?? props.name;
  return (
    <div className="svgIconExp">
      <SvgIcon {...props} />
      {name && <span className="iconName">{name}</span>}
    </div>
  );
};

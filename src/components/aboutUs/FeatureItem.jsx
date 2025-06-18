import React from 'react';
import { FeatureIcon } from './FeatureIcon';

export function FeatureItem({
  title,
  description,
  iconSrc,
  iconBgColor,
  titleColor,
  alignment = 'left',
  iconPosition = 'left',
}) {
  const isRightAligned = alignment === 'right';
  const isIconRight = iconPosition === 'right';

  const textContent = (
    <div className={`d-flex flex-column ${isRightAligned ? 'align-items-end' : ''}`}>
      <h3 className={`fs-3 fw-semibold poltawski-nowy ${titleColor}`}>
        {title}
      </h3>
      <p className={`mt-2 text-dark fs-6 ${isRightAligned ? 'text-end' : ''}`}>
        {description}
      </p>
    </div>
  );

  const iconContent = (
    <FeatureIcon
      src={iconSrc}
      bgColor={iconBgColor}
      className="mt-3 mt-md-0"
    />
  );

  return (
    <article className="d-flex flex-column flex-md-row gap-3">
      {isIconRight ? (
        <>
          <div className="flex-grow-1">{textContent}</div>
          <div>{iconContent}</div>
        </>
      ) : (
        <>
          <div>{iconContent}</div>
          <div className="flex-grow-1">{textContent}</div>
        </>
      )}
    </article>
  );
}

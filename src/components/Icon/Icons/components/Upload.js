/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Upload = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M14.5285 7.3909C14.8225 7.09913 14.8244 6.62426 14.5326 6.33025L10.4055 2.17141C10.2647 2.02952 10.0731 1.94971 9.87316 1.94971C9.67325 1.94971 9.48162 2.02952 9.3408 2.17141L5.21373 6.33025C4.92197 6.62426 4.92379 7.09913 5.2178 7.3909C5.51181 7.68267 5.98668 7.68085 6.27845 7.38683L9.19554 4.44729L9.19554 12.484C9.19554 12.8982 9.53132 13.234 9.94554 13.234C10.3598 13.234 10.6955 12.8982 10.6955 12.484L10.6955 4.59317L13.4679 7.38683C13.7596 7.68085 14.2345 7.68267 14.5285 7.3909ZM3.5498 12.0188L3.5498 16.3423C3.55037 16.3438 3.55122 16.3457 3.55248 16.348C3.55683 16.356 3.56694 16.3705 3.58802 16.3871C3.63281 16.4225 3.71072 16.4532 3.80566 16.4494C3.81561 16.449 3.82556 16.4488 3.83552 16.4488L16.2641 16.4488C16.2739 16.4488 16.2837 16.449 16.2935 16.4494C16.3885 16.4531 16.4665 16.4224 16.5114 16.387C16.5325 16.3703 16.5427 16.3557 16.5471 16.3476C16.548 16.346 16.5486 16.3446 16.5492 16.3435C16.5494 16.3429 16.5496 16.3424 16.5498 16.3419V12.0188C16.5498 11.6046 16.8856 11.2688 17.2998 11.2688C17.714 11.2688 18.0498 11.6046 18.0498 12.0188V16.3812C18.0498 16.3957 18.0494 16.4102 18.0485 16.4247C18.0217 16.8858 17.7871 17.291 17.4408 17.5643C17.102 17.8318 16.6747 17.9617 16.2512 17.9488L3.84857 17.9488C3.42497 17.9619 2.99753 17.8321 2.65858 17.5645C2.31217 17.291 2.07751 16.8855 2.05104 16.4241C2.05022 16.4098 2.0498 16.3955 2.0498 16.3812V12.0188C2.0498 11.6046 2.38559 11.2688 2.7998 11.2688C3.21402 11.2688 3.5498 11.6046 3.5498 12.0188Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Upload.displayName = 'Upload';
Upload.propTypes = {
  size: PropTypes.string
}
export default Upload;
/* tslint:enable */
/* eslint-enable */

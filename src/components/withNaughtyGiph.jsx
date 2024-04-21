import React from 'react';

const withNaughtyGiph = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    if (props.isNaughty) {
      return (
        <div>
          <iframe src="https://giphy.com/embed/hyyV7pnbE0FqLNBAzs" ></iframe>
        </div>
      )
    } else {
      return <WrappedComponent {...props} />
    }
  }
};

export default withNaughtyGiph;

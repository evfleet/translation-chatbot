import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Bubble.scss';
import { requiredHex } from 'utils/propHelpers';

const Bubble = (props) => {
  const { icon, size, colour, backgroundColour } = props;

  switch(icon) {
    case 'user':
      return (
        <div style={{ 
          width: `${size}px`,
          height: `${size}px`
        }}>
          <svg styleName="icon" viewBox="0 0 89 83">  
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill={colour}>
                  <path d="M44.2798639,4.91605245e-15 C68.7361863,4.91605245e-15 88.5597279,16.1068005 88.5597279,35.9773894 C88.5597279,55.8479784 68.7361863,71.9547789 44.2798639,71.9547789 C41.9302637,71.9547789 39.6249432,71.8053344 37.3749727,71.5175152 C27.8631044,81.0293835 16.5108543,82.7341583 5.53498299,82.986 L5.53498299,80.6585397 C11.4629498,77.7554411 16.604949,72.4639973 16.604949,66.4197959 C16.604949,65.575711 16.5385292,64.748231 16.4167596,63.937356 C6.40120783,57.3424238 0,47.2659873 0,35.9773894 C0,16.1068005 19.8235416,0 44.2798639,0 L44.2798639,4.91605245e-15 Z M47.6163314,43.817993 L47.6163314,41.2809723 C51.0056925,39.3716681 53.7704142,34.608408 53.7704142,29.8466864 C53.7704142,22.1986999 53.7704142,16 44.53929,16 C35.3081657,16 35.3081657,22.1986999 35.3081657,29.8466864 C35.3081657,34.6099465 38.0728874,39.3716681 41.4622485,41.2809723 L41.4622485,43.817993 C31.024924,44.671872 23,49.7997615 23,56 L66.0785799,56 C66.0785799,49.7997615 58.0536559,44.6703335 47.6163314,43.817993 Z" transform="translate(44.279864, 41.493000) scale(-1, 1) translate(-44.279864, -41.493000)" />
                </g>
            </g>
          </svg>
        </div>
      )

    case 'bot':
      return (
        <div style={{ 
          width: `${size}px`,
          height: `${size}px`
        }}>
          <svg styleName="icon" viewBox="0 0 89 83">  
            <path fill={colour} d="M44.2798639,4.91605245e-15 C68.7361863,4.91605245e-15 88.5597279,16.1068005 88.5597279,35.9773894 C88.5597279,55.8479784 68.7361863,71.9547789 44.2798639,71.9547789 C41.9302637,71.9547789 39.6249432,71.8053344 37.3749727,71.5175152 C27.8631044,81.0293835 16.5108543,82.7341583 5.53498299,82.986 L5.53498299,80.6585397 C11.4629498,77.7554411 16.604949,72.4639973 16.604949,66.4197959 C16.604949,65.575711 16.5385292,64.748231 16.4167596,63.937356 C6.40120783,57.3424238 0,47.2659873 0,35.9773894 C0,16.1068005 19.8235416,0 44.2798639,0 L44.2798639,4.91605245e-15 Z" />
            <g transform="translate(15.000000, 18.000000)" fill={backgroundColour}>
              <polygon points="38.8157895 28.2916667 43.4736842 32.9166667 59 17.5 43.4736842 2.08333333 38.8157895 6.70833333 49.6842105 17.5" />
              <polygon points="20.1842105 6.70833333 15.5263158 2.08333333 0 17.5 15.5263158 32.9166667 20.1842105 28.2916667 9.31578947 17.5" />
              <polygon points="32.4748421 0.0853333333 35.8456053 0.998 26.5298158 34.9162083 23.1590526 34.0035417 32.4748421 0.0853333333" />
            </g>
          </svg>
        </div>
      )

    default:
      return null;
  }
}

Bubble.propTypes = {
  icon: (props, propName, componentName) => {
    const iconTypes = [
      'user',
      'bot'
    ];

    if (!iconTypes.includes(props[propName])) {
      return new Error(`Invalid prop \`${propName}\` of value \`${props[propName]}\` supplied to \`${componentName}\`, expected one of \`${iconTypes.join(', ')}\``);
    }
  },
  size: PropTypes.number,
  colour: requiredHex,
  backgroundColour: requiredHex
}

Bubble.defaultProps = {
  size: 32,
  backgroundColour: '#FFFFFF'
}

export default CSSModules(Bubble, styles);
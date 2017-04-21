import React from 'react';

const styles = {
  circle: {
      display: 'inline-block',
      width: 'auto',
      height: 'auto',
      borderRadius: '50%',
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
  },
  svgWrapper: {
    width: '50%',
    display: 'inline-block',
    marginTop: '50%',
    transform: 'translateY(-50%)',
  },
};


export default function(props) {
  let { className, noText, rootStyle, noBgColor, onClick } = props;
  let circleStyle = Object.assign({}, styles.circle, rootStyle, {backgroundColor: noBgColor ? 'none' : '#bb9f7d'});

  return (
    <div style={circleStyle} className={className} onClick={onClick}>
      {
          <div style={Object.assign({}, styles.svgWrapper, noText ? {width: '56%', marginTop: '56%'} : '')}>
              <svg width='100%' height='100%' viewBox={noText ? '28 0 200 200' : '-13 0 285 285' }preserveAspectRatio='xMidYMid meet' version='1.1'>
                <g id='Land-+-Overview' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Land-+-Overview---Desktop-HD' transform='translate(-591.000000, -246.000000)' fill='#FEFEFE'>
                    <g id='Section-1---Land'>
                      <g id='Logo-Lockup' transform='translate(460.000000, 120.000000)'>
                        { noText ? '' :
                          <g id='Wordmark' transform='translate(131.000000, 365.000000)'>
                            <path d='M242,42.0555556 L259,26 L259,43 L241,43 L229,42.9995428 L229,2 L242,2 L242,42.0555556 Z' id='L'></path>
                            <polygon id='E' points='220 12 220 2 188 2 188 43 220.089271 43 220 33 199 33 199 27 214 27 214 18 199 18 199 12'></polygon>
                            <polygon id='T' points='180 2 144 2 144 12.5 156 12.5 156 43 168 43 168 12.5 180 12.5'></polygon>
                            <path d='M118.5,12 C112.710454,12 108,16.7104539 108,22.5 C108,28.2895461 112.710454,33 118.5,33 C124.289546,33 129,28.2895461 129,22.5 C129,16.7104539 124.289546,12 118.5,12 M96,22.5 C96,10.0932203 106.09322,0 118.5,0 C130.90678,0 141,10.0932203 141,22.5 C141,34.9067797 130.90678,45 118.5,45 C106.09322,45 96,34.9067797 96,22.5 Z' id='O'></path>
                            <polygon id='N' points='48 2 58.8706076 2 76.8471964 25 76.8471964 2 88 2 88 43 77.8419273 43 59.0684381 19.2446156 59.0684381 43 48 43'></polygon>
                            <polygon id='K' points='42 2 27 2 11.5 18.5 11.5 2 0 2 0 45.5 16 28.5 27 43 42 43 24.5 20.5'></polygon>
                          </g>
                        }
                        <polyline id='Flag' points='334 126 260 322 186 126'></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
          </div>

      }
    </div>
  )

};

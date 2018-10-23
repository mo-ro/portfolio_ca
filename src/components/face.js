import React from 'react'

import Bg from '../images/bg.png';
import EyeBrow from '../images/eyebrow.png';
import Eye from '../images/eye.png';
import Mouse from '../images/mouse.png';
import EyeBall from '../images/eyeball.png';

class Face extends React.Component {
  render() {
    return (
      <svg className={this.props.className} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
viewBox='0 0 827 1216'>
          <image width='827' height='1216' id='Hige' xlinkHref={Bg}
          overflow='visible' />
          <image width='181' height='97' id='EyeBrow-r' xlinkHref={EyeBrow}
          transform='translate(182 512)' overflow='visible' />
          <image width='181' height='97' id='EyeBrow-r_1_' xlinkHref={EyeBrow}
          transform='matrix(-1 0 0 1 648.536 512)' overflow='visible' />
          <image width='137' height='56' id='Eye-l' xlinkHref={Eye}
          transform='translate(491 628)' overflow='visible' />
          <image width='228' height='18' id='Mouse' xlinkHref={Mouse}
          transform='translate(290 994)' overflow='visible' />
          <image width='104' height='61' id='Eye-l-2' xlinkHref={EyeBall}
          transform='translate(502.372 612.218) scale(.9929)' overflow='visible'
          />
          <image width='137' height='56' id='Eye-l_1_' xlinkHref={Eye}
          transform='scale(-1 1) rotate(-1.81 19632.602 11188.444)' overflow='visible'
          />
          <image width='103' height='61' id='Eye-l-2_1_' xlinkHref={EyeBall}
          transform='scale(-1 1) rotate(-1.81 19120.405 10832.434)' overflow='visible'
          />
      </svg>
    )
  }
}

export default Face;
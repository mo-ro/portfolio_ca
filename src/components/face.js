import React from 'react';
import ReactDOM from 'react-dom';

import Bg from '../images/bg.png';
import EyeBrow from '../images/eyebrow.png';
import Eye from '../images/eye.png';
import Mouse from '../images/mouse.png';
import EyeBall from '../images/eyeball.png';

class Face extends React.Component {

  constructor() {
    super()
    this.state = {
      cx: 0,
      cy: 0
    }
  }
  componentDidMount() {
    const rightEye = ReactDOM.findDOMNode(this.refs.rightEye).getBoundingClientRect();
    const leftEye = ReactDOM.findDOMNode(this.refs.leftEye).getBoundingClientRect();
    const face = ReactDOM.findDOMNode(this.refs.face).getBoundingClientRect();
    this.setState({
      rcx: rightEye.x + rightEye.width / 2,
      rcy: rightEye.y + rightEye.height / 2,
      lcx: leftEye.x + leftEye.width / 2,
      lcy: leftEye.y + leftEye.height / 2,
      faceX: face.x + face.width / 2,
      faceY: face.y + face.height / 2
    })
  }

  setRightBrow(distance) {
    let style;
    if(distance > 600) {
      style = {
        transform: 'translate(0, -20px) rotate(-10deg)'
      }
    } else if(distance < 200) {
      style = {
        transform: 'translate(30px, 20px) rotate(10deg)'
      }
    }
    return style
  }

  setLeftBrow(distance) {
    let style;
    if(distance > 600) {
      style = {
        transform: 'translate(0, -100px) rotate(10deg)'
      }
    } else if(distance < 200) {
      style = {
        transform: 'translate(-30px, 100px) rotate(-10deg)'
      }
    }
    return style
  }

  handleClick(event) {
    console.log(event)
  }

  render() {
    let rangle = Math.atan2(this.props.y - this.state.rcy, this.props.x - this.state.rcx);
    let rbcx = this.state.rcx / 6 * Math.cos(rangle);
    let rbcy = this.state.rcy / 60 * Math.sin(rangle);

    let langle = Math.atan2(this.props.y - this.state.lcy, this.props.x - this.state.lcx);
    let lbcx = this.state.lcx / 8 * Math.cos(langle);
    let lbcy = this.state.lcy / 60 * Math.sin(langle);

    let distance = Math.sqrt(Math.pow(this.state.faceX - this.props.x, 2) + Math.pow(this.state.faceY - this.props.y, 2))

    let eyeBrowRightStyle = this.setRightBrow(distance)
    let eyeBrowLeftStyle = this.setLeftBrow(distance)
    let faceStyle

    let rightEyeStyle = {
      transform: `translate(${rbcx}px, ${rbcy}px)`
    }
    let leftEyeStyle = {
      transform: `translate(${lbcx}px, ${lbcy}px)`
    }

    return (
      <svg className={this.props.className} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
viewBox='0 0 827 1216' style={faceStyle} onClick={this.handleClick.bind(this)}>
          <image width='827' height='1216' id='Hige' ref="face" xlinkHref={Bg}
          overflow='visible' />
          {/* <image width='181' height='97' id='EyeBrow-r' xlinkHref={EyeBrow}
          transform='translate(182 512)' overflow='visible' /> */}
          {/* <image width='181' height='97' id='EyeBrow-r_1_' xlinkHref={EyeBrow}
          transform='matrix(-1 0 0 1 648.536 512)' overflow='visible' /> */}
          <image width='137' height='56' id='Eye-l' xlinkHref={Eye}
          transform='translate(491 628)' overflow='visible' />
          <image width='228' height='18' id='Mouse' xlinkHref={Mouse}
          transform='translate(290 994)' overflow='visible' />
          {/* <image width='104' height='61' id='Eye-l-2' xlinkHref={EyeBall}
          transform='translate(502.372 620.218) scale(.9)' overflow='visible'
          /> */}
          <image width='137' height='56' id='Eye-l_1_' xlinkHref={Eye}
          transform='scale(-1 1) rotate(-1.81 19632.602 11188.444)' overflow='visible'
          />
          {/* <image width='103' height='61' id='Eye-l-2_1_' xlinkHref={EyeBall}
          transform='scale(-0.9 0.9) rotate(-1.81 19120.405 10832.434)' overflow='visible'
          /> */}
        <g transform='translate(186 516)'>
          <path className='eyeBrow' fill='#030303' style={eyeBrowLeftStyle} d='M403.11,0.7c21.11,3.18,41.95,7.16,60.12,20.7C409.2,26.83,355.96,33.97,304,48.65 c-6.73,1.9-12.99,8.61-20.89,3.05c0-1.67,0-3.33,0-5c5.29-14.98,14.91-24.33,30.72-29.4c23.08-7.39,46.41-12.96,70.28-16.6 c1.33,0,2.67-0.28,4-0.4c4.14-0.36,7.9-0.44,12,0C401.11,0.41,402.11,0.7,403.11,0.7z'/>
          <path className='eyeBrow' fill='#030303' style={eyeBrowRightStyle} d='M60.12,0.7C39.01,3.88,18.17,7.86,0,21.41c54.03,5.43,107.27,12.57,159.24,27.25 c6.73,1.9,12.99,8.61,20.89,3.05c0-1.67,0-3.33,0-5c-5.29-14.98-14.91-24.33-30.72-29.4C126.32,9.92,103,4.35,79.12,0.7 c-1.33,0-2.67-0.28-4-0.4c-4.14-0.36-7.9-0.44-12,0C62.13,0.41,61.12,0.7,60.12,0.7z'
          />
          <path className='st1' style={leftEyeStyle} ref="leftEye" fill='#050505' d='M355.97,163.38c-12.41-7.58-16.38-18.9-11.2-31.62c0.99-2.42,2.4-4.28,4.55-5.72 c11.5-7.73,24.63-6.5,35.32,1.24c0.91,0.66,1.72,1.62,2.24,2.62c4.79,9.19,0.49,24.98-8.38,30.31c-2.31,1.39-5.01,2.13-7.54,3.17 C365.72,164.89,360.05,164.78,355.97,163.38z M363.21,141.41c-0.4-1.9-1.45-3.23-3.64-3.15c-2.24,0.08-3.96,1.13-3.88,3.55 c0.07,2.17,1.27,3.96,3.72,3.65C361.46,145.19,362.99,143.88,363.21,141.41z M362.57,155.71c4.89,1.05,9.82,2.15,13.07-3.38 C371.41,154.09,367.41,156.84,362.57,155.71z'
          />
          {/* <path className='st2' fill='#E8E8E8' d='M363.21,141.41c-0.22,2.47-1.74,3.78-3.8,4.05c-2.45,0.32-3.65-1.48-3.72-3.65c-0.08-2.42,1.64-3.47,3.88-3.55 C361.75,138.18,362.81,139.51,363.21,141.41z'
          />
          <path className='st2' fill='#E8E8E8' d='M362.57,155.71c4.84,1.13,8.84-1.62,13.07-3.38C372.39,157.86,367.46,156.76,362.57,155.71z'
          /> */}
          <g>
            <path className='st1' style={rightEyeStyle} ref="rightEye" fill='#050505' d='M90.35,158.62c-2.49-1.12-5.16-1.95-7.43-3.42c-8.68-5.62-12.46-21.55-7.36-30.57 c0.55-0.98,1.39-1.91,2.32-2.54c10.94-7.39,24.1-8.17,35.34-0.06c2.1,1.52,3.46,3.42,4.36,5.87c4.75,12.88,0.41,24.07-12.25,31.23 C101.22,160.39,95.55,160.3,90.35,158.62z M102.51,141.1c2.44,0.4,3.7-1.36,3.84-3.52c0.16-2.42-1.52-3.52-3.76-3.68 c-2.19-0.15-3.29,1.14-3.74,3.03C98.98,139.4,100.46,140.76,102.51,141.1z M86.05,147.42c3.07,5.63,8.02,4.7,12.95,3.82 C94.13,152.21,90.22,149.32,86.05,147.42z'
            />
            {/* <path className='st2' fill='#E8E8E8' d='M98.85,136.92c0.13,2.47,1.61,3.84,3.66,4.17c2.44,0.4,3.7-1.36,3.84-3.52c0.16-2.42-1.52-3.52-3.76-3.68 C100.41,133.75,99.31,135.04,98.85,136.92z'
            />
            <path className='st2' fill='#E8E8E8' d='M99,151.24c-4.87,0.97-8.78-1.92-12.95-3.82C89.12,153.06,94.08,152.12,99,151.24z'
            /> */}
          </g>
        </g>
      </svg>
    )
  }
}

export default Face;
import React from 'react'
import { Link } from 'gatsby'

class BottomNav extends React.PureComponent {
  render() {
    return (
      <nav className="bottom-nav">
        <Link to="/" className="link" data-active={this.props.active === '' ? false : true}>
          <svg className="img" data-prefix='fas' data-icon='home'
          xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
              <path fill={this.props.active === '' ? '#f73859' : '#929498'} d='M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z'
              />
          </svg>
          <div className="text">Home</div>
        </Link>
        <Link to="/about" className="link" data-active={this.props.active === 'about' ? false : true}>
          <svg className="img" data-prefix='fas' data-icon='user'
          xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
              <path fill={this.props.active === 'about' ? '#f73859' : '#929498'} d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
              />
          </svg>
          <div className="text">About</div>
        </Link>
        <Link to="/works" className="link" data-active={this.props.active === 'works' ? false : true}>
          <svg className="img" data-prefix='fas' data-icon='image'
          xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path fill={this.props.active === 'works'  ? '#f73859' : '#929498'} d='M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z'
            />
          </svg>
          <div className="text">Works</div>
        </Link>
      </nav>
    )
  }
}

export default BottomNav
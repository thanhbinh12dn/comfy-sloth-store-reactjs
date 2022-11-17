import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return ( 
        <footer className={cx('container')}>
            <h5 className={cx('copyright')}>&copy; 2022 <span>ComfySloth</span> All rights reserved</h5>
        </footer>
     );
}

export default Footer;
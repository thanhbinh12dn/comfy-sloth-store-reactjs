import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from '../../../assets/images';
import { CartIcon, MenuIcon, AuthIcon } from '../../../components/Icons';

const cx = classNames.bind(styles)

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('center')}>
                <div className={cx('logo')}>
                    <Link to="/" className={cx('logo-link')}>
                        <img src={images.logo} alt="comfy-sloth"/>
                    </Link>
                    <button className={cx('menu-toggle')}>
                        <MenuIcon/>
                    </button>
                </div>
                <ul className={cx('nav-list')}>
                    <li>
                        <Link to="/" className={cx('nav-link')}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={cx('nav-link')}>About</Link>
                    </li>
                    <li>
                        <Link to="/product" className={cx('nav-link')}>Products</Link>
                    </li>
                </ul>
                <div className={cx('cart-container')}>
                    <Link to="/cart" className={cx('cart')}>
                        Cart
                        <span className={cx('cart-wrapper')}>
                            <CartIcon className={cx('cart-icon')}/>
                            <span className={cx('cart-value')}>1</span>
                        </span>
                    </Link>
                    <button className={cx('auth')}>
                        Login
                        <AuthIcon className={cx('auth-icon')}/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
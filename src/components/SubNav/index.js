import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './SubNav.module.scss'

const cx = classNames.bind(styles)

function SubNav({ title, product }) {
    return ( 
        <section className={cx('container')}>
            <div className={cx('section-center')}>
                <h3>
                    <Link to="/" className={cx('subnav-link')}>Home </Link>
                    / {title}
                </h3>
            </div>
        </section>
     );
}

export default SubNav;
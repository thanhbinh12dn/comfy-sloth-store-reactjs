import classNames from "classnames/bind";
import styles from './CartContent.module.scss'

const cx = classNames.bind(styles)

function CartContent() {
    return ( 
        <section className={cx('page')}>
            <div className={cx('main section section-center')}>
                <div className={cx('main-head')}>
                    <div className={cx('content')}>
                        <h5>item</h5>
                        <h5>price</h5>
                        <h5>quantity</h5>
                        <h5>subtotal</h5>
                        <span></span>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('title')}>
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default CartContent;
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1670515200&x-signature=A2WxL9bPuy6PhoipN59xFpwuYVk%3D"
                alt="hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('mame')}>
                    <span>pham dac thanh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>phamdacthanh</span>
            </div>
        </div>
    );
}

export default AcountItem;

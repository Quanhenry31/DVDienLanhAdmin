import { Link } from 'react-router-dom';
import config from '~/config';

import styles from './SignUp.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function SignUp() {
    return (
        <>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className={cx('px-5', 'ms-xl-4')}>
                                <i
                                    className={cx('fas fa-crow fa-2x', 'me-3', 'pt-5', 'mt-xl-4')}
                                    style={{ color: '#709085' }}
                                />
                                <span className={cx('h1', 'fw-bold', 'mb-0')}>
                                    {' '}
                                    <Link to={config.routes.home} className={cx('footer-logo')}>
                                        Furni<span>.</span>
                                    </Link>
                                </span>
                            </div>
                            <div
                                className={cx(
                                    'd-flex',
                                    'align-items-center',
                                    'h-custom-2',
                                    'px-5',
                                    'ms-xl-4',
                                    'mt-5',
                                    'pt-5',
                                    'pt-xl-0',
                                    'mt-xl-n5',
                                )}
                            >
                                <form className={cx('w-75')}>
                                    <h3 className={cx('fw-normal', 'mb-3', 'pb-3')} style={{ letterSpacing: 1 }}>
                                        Sign up
                                    </h3>
                                    <div className={cx('form-outline', 'mb-4')}>
                                        <input
                                            type="text"
                                            id="form2Example18"
                                            className={cx('form-control', 'form-control-lg')}
                                        />
                                        <label className="form-label" htmlFor="form2Example18">
                                            Full name
                                        </label>
                                    </div>
                                    <div className={cx('form-outline', 'mb-4')}>
                                        <input
                                            type="email"
                                            id="form2Example18"
                                            className={cx('form-control', 'form-control-lg')}
                                        />
                                        <label className="form-label" htmlFor="form2Example18">
                                            Email address
                                        </label>
                                    </div>
                                    <div className={cx('form-outline', 'mb-4')}>
                                        <input
                                            type="password"
                                            id="form2Example28"
                                            className={cx('form-control', 'form-control-lg')}
                                        />
                                        <label className="form-label" htmlFor="form2Example28">
                                            Password
                                        </label>
                                    </div>
                                    <div className={cx('pt-1', 'mb-4')}>
                                        <button className={cx('btn', 'btn-info', 'btn-lg', 'btn-block')} type="button">
                                            Register
                                        </button>
                                    </div>
                                    <p className={cx('small', 'mb-5', 'pb-lg-2')}>
                                        <a className="text-muted" href="#!">
                                            Forgot password?
                                        </a>
                                    </p>
                                    <p>
                                        Log out?{' '}
                                        {/* <a href="#!" className={cx('link-info')}>
                                            Register here
                                        </a> */}
                                        <Link to={config.routes.login} className={cx('link-info')}>
                                            Back login
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                alt="Login image"
                                className={cx('w-100', 'vh-100')}
                                style={{ objectFit: 'cover', objectPosition: 'left' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;

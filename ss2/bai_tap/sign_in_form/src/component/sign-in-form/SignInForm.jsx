import React from 'react';
import { formStyles as classes } from '../../styles/formStyles';

function SignInForm() {

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                {/* Logo Tailwind */}
                <div className={classes.logoContainer}>
                    <img
                        className={classes.logo}
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                        alt="Tailwind CSS Logo"
                    />
                </div>

                {/* Title */}
                <h2 className={classes.title}>
                    Đăng Nhập
                </h2>
                <p className={classes.subtitle}>
                    Chào mừng bạn quay trở lại!
                </p>

                <form className={classes.form}>
                    {/* Email Input */}
                    <div className={classes.inputGroup}>
                        <label className={classes.label}>
                            Địa chỉ Email
                        </label>
                        <div className={classes.inputWrapper}>
                            <div className={classes.inputIconContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={classes.inputIcon} viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className={classes.input}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className={classes.inputGroup}>
                        <label className={classes.label}>
                            Mật khẩu
                        </label>
                        <div className={classes.inputWrapper}>
                            <div className={classes.inputIconContainer}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={classes.inputIcon} viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className={classes.input}
                            />
                        </div>
                    </div>

                    {/* Remember me & Forgot Password */}
                    <div className={classes.rememberContainer}>
                        <label className={classes.checkboxContainer}>
                            <div className={classes.checkboxWrapper}>
                                <input type="checkbox" className={classes.checkbox} />
                            </div>
                            <span className={classes.rememberText}>Ghi nhớ đăng nhập</span>
                        </label>
                        <a href="#" className={classes.forgotPassword}>
                            Quên mật khẩu?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className={classes.button}
                    >
                        Đăng nhập
                        <svg xmlns="http://www.w3.org/2000/svg" className={classes.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Divider */}
                    <div className={classes.dividerContainer}>
                        <div className={classes.dividerLine}>
                            <div className={classes.dividerLineInner}></div>
                        </div>
                        <div className={classes.dividerTextContainer}>
                            <span className={classes.dividerText}>Hoặc tiếp tục với</span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className={classes.socialButtons}>
                        <button type="button" className={classes.googleButton}>
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className={classes.buttonIcon} />
                            Google
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <p className={classes.registerText}>
                    Chưa có tài khoản?{' '}
                    <a href="#" className={classes.registerLink}>
                        Đăng ký ngay
                    </a>
                </p>

                <p className={classes.copyright}>
                    © 2017–2021 Tên Công Ty
                </p>
            </div>
        </div>
    );
}

export default SignInForm;

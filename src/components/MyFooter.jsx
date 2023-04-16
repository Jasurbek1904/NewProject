import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../Images/footerImg.png"


export default function MyFooter() {
    return (
        <div className="footer">
            <div className="container">
                <img src={footerImg} alt="" className="footerImg" />
                <div className="row fanlarRow">
                    <div className="col-md-8 col-m-12">
                        <div className="row fanlar">
                            <div className="col-md-4 mb-5">
                                <h3>Dasturlash</h3>
                                <p><Link to="/foundation"> Frontend</Link></p>
                                <p><Link to="/foundation"> Backend</Link></p>
                                <p><Link to="/foundation"> Foundation</Link></p>
                                <p><Link to="/foundation"> Ux & Ui design</Link></p>
                                <p><Link to="/foundation"> Web design</Link></p>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3>Ingliz tili</h3>
                                <p><Link to="/english"> English for kids</Link></p>
                                <p><Link to="/english"> General English</Link></p>
                                <p><Link to="/english"> English for IT</Link></p>
                                <p><Link to="/english"> IELTS</Link></p>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h3>Matematika</h3>
                                <p><Link to="/error"> Mental arifmetika</Link></p>
                                <p><Link to="/error"> Maths for kids</Link></p>
                                <p><Link to="/error"> Math for students</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-m-12 iconSide">
                        <div className='navbrand'>
                            <Link to="/" onClick={window.location.reload}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="19" viewBox="0 0 55 19" fill="none" className='infIcon'>
                                        <path d="M53.2184 5.69241C52.3824 4.43841 51.2956 3.42761 50.0492 2.59161C48.286 1.40601 46.3784 0.623213 44.2428 0.425613C42.4036 0.250813 40.6024 0.402812 38.8392 0.942412C37.3952 1.38321 36.0424 2.02161 34.72 2.73601C32.8808 3.73161 31.186 4.94761 29.6052 6.30801C28.7692 7.02241 27.9332 7.74441 27.1048 8.47401C26.9452 8.61081 26.8388 8.61081 26.7096 8.46641C26.6944 8.45121 26.6716 8.42841 26.6564 8.41321C25.2808 7.12881 23.814 5.95081 22.2788 4.85641C20.1964 3.37441 18.0152 2.08241 15.5908 1.23881C14.0632 0.706812 12.5128 0.304013 11.2132 0.326813C10.1644 0.319213 9.45 0.326813 8.7508 0.463613C7.398 0.714413 6.1212 1.18561 4.9204 1.86961C3.8564 2.47761 2.9216 3.25281 2.154 4.21801C1.3864 5.18321 0.938001 6.30041 0.656801 7.48601C0.520001 8.07881 0.390801 8.67921 0.436401 9.28721C0.542801 10.5792 0.953201 11.7876 1.5536 12.9276C2.078 13.9308 2.8608 14.7136 3.6816 15.466C4.9964 16.6592 6.5316 17.4724 8.2112 18.0196C9.1916 18.3388 10.1872 18.5896 11.2132 18.658C12.8776 18.772 14.504 18.5364 16.0924 18.0044C18.0684 17.3356 19.938 16.4616 21.7316 15.3824C23.3656 14.402 24.8932 13.2772 26.3296 12.0156C26.8008 11.6052 27.2644 11.1796 27.728 10.7616C27.8192 10.678 27.8876 10.6704 27.9788 10.7616C28.1308 10.906 28.298 11.0276 28.4576 11.1644C29.6432 12.2284 30.9048 13.186 32.2044 14.1056C33.2608 14.8656 34.4008 15.4812 35.5484 16.0968C37.152 16.9556 38.8088 17.7004 40.5796 18.1488C41.446 18.3692 42.3048 18.6276 43.2016 18.658C45.1168 18.7264 46.994 18.4984 48.78 17.7536C50.5052 17.0392 51.9796 15.9828 53.074 14.4476C53.9556 13.224 54.4876 11.856 54.556 10.3436C54.632 8.64881 54.1532 7.09841 53.2184 5.69241ZM26.2536 9.30241C25.2428 10.2828 24.1636 11.1872 23.0388 12.0384C22.3472 12.5552 21.6708 13.0872 20.9412 13.5508C19.6036 14.4096 18.2356 15.2152 16.7536 15.808C15.492 16.3096 14.2152 16.7732 12.8928 17.0772C12.1632 17.2444 11.4184 17.3128 10.5976 17.3128C9.0776 17.2976 7.5348 17.0468 6.1136 16.2868C4.0844 15.2 2.8 13.5356 2.42 11.2404C1.9944 8.67921 2.7848 6.50561 4.6012 4.68161C6.0984 3.16921 7.9224 2.28001 9.9896 1.87721C10.8636 1.70241 11.7528 1.59601 12.6496 1.61121C13.7364 1.62641 14.7852 1.87721 15.8112 2.20401C17.0044 2.59161 18.114 3.14641 19.2084 3.74681C20.3788 4.38521 21.5188 5.09201 22.5752 5.91281C23.2744 6.46001 23.9736 6.99961 24.6348 7.58481C25.182 8.07121 25.7216 8.55761 26.2536 9.05161C26.36 9.15801 26.3524 9.20361 26.2536 9.30241ZM50.642 14.0828C49.5628 15.2684 48.2328 16.0816 46.7356 16.6288C45.4892 17.0848 44.2048 17.3356 42.7456 17.3432C41.3244 17.3432 39.8348 17.0012 38.3756 16.5072C35.6852 15.6028 33.2988 14.1664 31.0872 12.4032C30.2208 11.7116 29.4076 10.982 28.602 10.222C28.526 10.146 28.4576 10.1004 28.5792 9.98641C29.6584 8.97561 30.7224 7.94961 31.8852 7.03761C33.6484 5.65441 35.4952 4.40041 37.5168 3.42001C39.3104 2.54601 41.1876 1.90761 43.1788 1.65681C44.3264 1.51241 45.4664 1.65681 46.5988 1.90001C47.8832 2.18121 49.0764 2.67521 50.11 3.49601C51.554 4.63601 52.4204 6.11801 52.6484 7.94961C52.922 10.3056 52.2304 12.3424 50.642 14.0828Z" fill="#333333" />
                                    </svg>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="41" viewBox="0 0 5 41" fill="none" className='infDrop'>
                                        <path opacity="0.2" d="M1.27274 0.897705V40.8977" stroke="#333333" strokeWidth="1.52273" />
                                    </svg>
                                </span>
                                <span className='infText'>Infinity</span>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.6282 10.1251C14.6282 12.5184 12.6881 14.4585 10.2948 14.4585C7.90159 14.4585 5.96149 12.5184 5.96149 10.1251C5.96149 7.73188 7.90159 5.79179 10.2948 5.79179C12.6881 5.79179 14.6282 7.73188 14.6282 10.1251ZM12.4615 10.1251C12.4615 11.3217 11.4914 12.2918 10.2948 12.2918C9.09821 12.2918 8.12816 11.3217 8.12816 10.1251C8.12816 8.9285 9.09821 7.95845 10.2948 7.95845C11.4914 7.95845 12.4615 8.9285 12.4615 10.1251Z" fill="#233249" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.27701 16.8918C-0.622903 13.1788 -0.774419 7.00725 2.93859 3.10734C6.65161 -0.792581 12.8231 -0.944096 16.723 2.76892C20.6229 6.48193 20.7745 12.6534 17.0614 16.5533L10.3384 23.6148L3.27701 16.8918ZM15.4922 15.0593L10.2632 20.5516L4.77101 15.3226C1.73775 12.4347 1.6199 7.6346 4.5078 4.60134C7.3957 1.56807 12.1958 1.45022 15.229 4.33812C18.2623 7.22602 18.3801 12.0261 15.4922 15.0593Z" fill="#233249" />
                            </svg>
                            <span className="m-2">Farg'ona shahar markazi <p></p> Mo'ljal : Yuqumli kasalliklar shifoxonasi</span>
                        </div>
                        <p className="fourIcons">
                            <Link to="/error">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                                    <path d="M3.19795 19.4971H7.19795V11.4872H10.8021L11.198 7.50684H7.19795V5.49707C7.19795 4.94479 7.64567 4.49707 8.19795 4.49707H11.198V0.49707H8.19795C5.43653 0.49707 3.19795 2.73565 3.19795 5.49707V7.50684H1.19795L0.802063 11.4872H3.19795V19.4971Z" fill="#233249" />
                                </svg>
                            </Link>
                            <Link to="/error" className="m-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 6.99707C8.23858 6.99707 6 9.23565 6 11.9971C6 14.7585 8.23858 16.9971 11 16.9971C13.7614 16.9971 16 14.7585 16 11.9971C16 9.23565 13.7614 6.99707 11 6.99707ZM8 11.9971C8 13.6539 9.34315 14.9971 11 14.9971C12.6569 14.9971 14 13.6539 14 11.9971C14 10.3402 12.6569 8.99707 11 8.99707C9.34315 8.99707 8 10.3402 8 11.9971Z" fill="#233249" />
                                    <path d="M17 4.99707C16.4477 4.99707 16 5.44479 16 5.99707C16 6.54936 16.4477 6.99707 17 6.99707C17.5523 6.99707 18 6.54936 18 5.99707C18 5.44479 17.5523 4.99707 17 4.99707Z" fill="#233249" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 0.99707C1.79086 0.99707 0 2.78793 0 4.99707V18.9971C0 21.2062 1.79086 22.9971 4 22.9971H18C20.2091 22.9971 22 21.2062 22 18.9971V4.99707C22 2.78793 20.2091 0.99707 18 0.99707H4ZM18 2.99707H4C2.89543 2.99707 2 3.8925 2 4.99707V18.9971C2 20.1016 2.89543 20.9971 4 20.9971H18C19.1046 20.9971 20 20.1016 20 18.9971V4.99707C20 3.8925 19.1046 2.99707 18 2.99707Z" fill="#233249" />
                                </svg>
                            </Link>
                            <Link to="/error" className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 0.99707C3.10457 0.99707 4 1.8925 4 2.99707V5.99707H10C11.1046 5.99707 12 6.8925 12 7.99707C12 9.10164 11.1046 9.99707 10 9.99707H4V11.9971C4 13.6539 5.34315 14.9971 7 14.9971H10C11.1046 14.9971 12 15.8925 12 16.9971C12 18.1016 11.1046 18.9971 10 18.9971H7C3.13401 18.9971 0 15.8631 0 11.9971V2.99707C0 1.8925 0.89543 0.99707 2 0.99707Z" fill="#233249" />
                                </svg>
                            </Link>
                            <Link to="/error" className="m-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                                    <path d="M19.3205 22.4647C19.1319 22.4647 18.9458 22.4084 18.7866 22.3007L12.7522 18.2083L9.51454 20.5374C9.25984 20.721 8.93412 20.7651 8.63778 20.6598C8.3439 20.5545 8.12104 20.3096 8.04022 20.0084L6.4165 13.849L0.60983 11.6277C0.244923 11.4881 0.0024678 11.1379 1.8758e-05 10.7461C-0.00243028 10.3542 0.235127 10.0016 0.597585 9.85709L22.6781 1.07238C22.7785 1.03074 22.8839 1.00625 22.9916 0.998907C23.0308 0.996458 23.0675 0.996458 23.1067 0.998907C23.3271 1.01115 23.5451 1.10177 23.7165 1.2683C23.7337 1.28544 23.7508 1.30259 23.7655 1.32218C23.9051 1.48382 23.9835 1.67974 23.9982 1.87811C24.0006 1.92709 24.0006 1.97852 23.9982 2.02995C23.9957 2.06669 23.9908 2.10342 23.9835 2.13771L20.2536 21.6933C20.1948 22.0068 19.9793 22.2713 19.6854 22.3937C19.5679 22.4403 19.4454 22.4647 19.3205 22.4647ZM13.2836 16.2711L18.6593 19.9177L21.5589 4.70186L11.0844 14.7797L13.2567 16.254C13.2665 16.2589 13.2738 16.2638 13.2836 16.2711ZM8.80922 15.4605L9.52678 18.1863L11.077 17.0695L9.04677 15.6932C8.95371 15.6295 8.87289 15.5511 8.80922 15.4605ZM3.56337 10.724L7.55041 12.2473C7.83695 12.3576 8.05246 12.5976 8.13083 12.8914L8.63533 14.809C8.65738 14.5886 8.75779 14.3805 8.92187 14.2237L18.9017 4.62104L3.56337 10.724Z" fill="#010409" />
                                </svg>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container ">
                <div className="position-relative">
                    <div style={{ position: "absolute", top: "0px", left: "55px" }} className="right">© 2022. All rights reserved</div>
                    <div style={{ position: "absolute", top: "0px", right: "180px" }} className="call">+998 (71) 200-11-23</div>
                </div>
            </div>
        </div>
    )
}
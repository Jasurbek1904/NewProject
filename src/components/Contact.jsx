import React from "react";
import aloqaImg from "../Images/aloqa.png"
import locationImg from "../Images/location.png"
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="container mt-5 mb-5 contactCont">
            <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                    <img src={aloqaImg} alt="" className="w-50 aloqaImg" />
                </div>
                <div className="col-md-6 col-sm-12 border">
                    <p className="boglanish">Bog'lanish ma'lumotlari</p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 37" fill="none" className="miniIcons locationIcon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.1202 16.1202C22.1202 19.8021 19.1354 22.7868 15.4535 22.7868C11.7716 22.7868 8.78688 19.8021 8.78688 16.1202C8.78688 12.4383 11.7716 9.45349 15.4535 9.45349C19.1354 9.45349 22.1202 12.4383 22.1202 16.1202ZM18.7869 16.1202C18.7869 17.9611 17.2945 19.4535 15.4535 19.4535C13.6126 19.4535 12.1202 17.9611 12.1202 16.1202C12.1202 14.2792 13.6126 12.7868 15.4535 12.7868C17.2945 12.7868 18.7869 14.2792 18.7869 16.1202Z" fill="#E79215" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.65691 26.5304C-1.34296 20.8181 -1.57606 11.3234 4.13627 5.32357C9.84859 -0.676302 19.3432 -0.909402 25.3431 4.80292C31.343 10.5153 31.5761 20.0099 25.8637 26.0097L15.5206 36.8735L4.65691 26.5304ZM23.4496 23.7113L15.4049 32.1608L6.95538 24.1162C2.28881 19.6733 2.10751 12.2886 6.55043 7.62203C10.9934 2.95547 18.378 2.77417 23.0446 7.21709C27.7112 11.66 27.8925 19.0447 23.4496 23.7113Z" fill="#E79215" />
                        </svg>
                        <span className="m-3">90 Bog'ishamol ko'chasi, Farg'ona, 100082</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" className="m-2 miniIcons">
                            <path fill-rule="evenodd" clipRule="evenodd" d="M0.00976562 1.83789C0.00976562 1.28561 0.457481 0.837891 1.00977 0.837891H17C17.5523 0.837891 18 1.28561 18 1.83789V13.1621C18 14.2667 17.1046 15.1621 16 15.1621H2C0.89543 15.1621 0 14.2667 0 13.1621V2.16211C0 2.11449 0.00332856 2.06765 0.00976562 2.0218V1.83789ZM2 4.06165V13.1621H16V4.06199L11.1215 8.9405C9.94992 10.1121 8.05042 10.1121 6.87885 8.9405L2 4.06165ZM3.57232 2.80554H14.428L9.70728 7.52628C9.31675 7.91681 8.68359 7.91681 8.29306 7.52628L3.57232 2.80554Z" fill="#E79215" />
                        </svg>
                        <span>info@gmail.com</span>
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none" className="m-2 miniIcons">
                            <path d="M6 14H8V16H6V14Z" fill="#E79215" />
                            <path fill-rule="evenodd" clipRule="evenodd" d="M14 2C14 0.895431 13.1046 0 12 0H2C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H12C13.1046 20 14 19.1046 14 18V2ZM12 2H2V18H12L12 2Z" fill="#E79215" />
                        </svg>
                        <span>+998 99 606-43-73</span>
                    </p>
                    <div className="row iconRow">
                        <div className="col-md-4 col-sm-6">
                            <Link to="/error">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none" className="iconBtn">
                                        <path d="M3.19765 19.5H7.19765V11.4901H10.8018L11.1976 7.50977H7.19765V5.5C7.19765 4.94772 7.64536 4.5 8.19765 4.5H11.1976V0.5H8.19765C5.43622 0.5 3.19765 2.73858 3.19765 5.5V7.50977H1.19765L0.801758 11.4901H3.19765V19.5Z" fill="#E79215" />
                                    </svg>
                                    <span className="m-2">facebook</span>
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <Link to="/error">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className="iconBtn">
                                        <path fill-rule="evenodd" clipRule="evenodd" d="M11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6ZM8 11C8 12.6569 9.34315 14 11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11Z" fill="#E79215" />
                                        <path d="M17 4C16.4477 4 16 4.44772 16 5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4Z" fill="#E79215" />
                                        <path fill-rule="evenodd" clipRule="evenodd" d="M4 0C1.79086 0 0 1.79086 0 4V18C0 20.2091 1.79086 22 4 22H18C20.2091 22 22 20.2091 22 18V4C22 1.79086 20.2091 0 18 0H4ZM18 2H4C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H18C19.1046 20 20 19.1046 20 18V4C20 2.89543 19.1046 2 18 2Z" fill="#E79215" />
                                    </svg>
                                    <span className="m-2">instagram</span>
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <Link to="/error">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none" className="iconBtn">
                                        <path d="M19.3205 21.4677C19.1319 21.4677 18.9458 21.4114 18.7866 21.3036L12.7522 17.2112L9.51454 19.5403C9.25984 19.724 8.93412 19.768 8.63778 19.6627C8.3439 19.5574 8.12104 19.3125 8.04022 19.0113L6.4165 12.852L0.60983 10.6307C0.244923 10.4911 0.0024678 10.1409 1.8758e-05 9.74902C-0.00243028 9.35717 0.235127 9.00451 0.597585 8.86002L22.6781 0.0753081C22.7785 0.0336744 22.8839 0.0091839 22.9916 0.00183678C23.0308 -0.00061226 23.0675 -0.00061226 23.1067 0.00183678C23.3271 0.014082 23.5451 0.104697 23.7165 0.271231C23.7337 0.288375 23.7508 0.305518 23.7655 0.32511C23.9051 0.486747 23.9835 0.68267 23.9982 0.881042C24.0006 0.930023 24.0006 0.981453 23.9982 1.03288C23.9957 1.06962 23.9908 1.10635 23.9835 1.14064L20.2536 20.6962C20.1948 21.0097 19.9793 21.2742 19.6854 21.3967C19.5679 21.4432 19.4454 21.4677 19.3205 21.4677ZM13.2836 15.2741L18.6593 18.9207L21.5589 3.70479L11.0844 13.7826L13.2567 15.2569C13.2665 15.2618 13.2738 15.2667 13.2836 15.2741ZM8.80922 14.4634L9.52678 17.1892L11.077 16.0724L9.04677 14.6961C8.95371 14.6324 8.87289 14.554 8.80922 14.4634ZM3.56337 9.72698L7.55041 11.2503C7.83695 11.3605 8.05246 11.6005 8.13083 11.8944L8.63533 13.812C8.65738 13.5916 8.75779 13.3834 8.92187 13.2267L18.9017 3.62397L3.56337 9.72698Z" fill="#E79215" />
                                    </svg>
                                    <span className="m-2">telegram</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5 locationDiv">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 121 121" fill="none" className="locIcon">
                    <circle opacity="0.2" cx="60.5" cy="60.5" r="60.5" fill="#EC4831" />
                    <path d="M61 58.0833C64.2217 58.0833 66.8333 55.4717 66.8333 52.25C66.8333 49.0283 64.2217 46.4167 61 46.4167C57.7783 46.4167 55.1667 49.0283 55.1667 52.25C55.1667 55.4717 57.7783 58.0833 61 58.0833Z" fill="#EC4831" />
                    <path fill-rule="evenodd" clipRule="evenodd" d="M78.5 52.25C78.5 60.9212 72.1933 68.1195 63.9167 69.508V84.3333C63.9167 85.9442 62.6108 87.25 61 87.25C59.3892 87.25 58.0833 85.9442 58.0833 84.3333V69.508C49.8067 68.1195 43.5 60.9212 43.5 52.25C43.5 42.585 51.335 34.75 61 34.75C70.665 34.75 78.5 42.585 78.5 52.25ZM61 63.9167C67.4433 63.9167 72.6667 58.6933 72.6667 52.25C72.6667 45.8067 67.4433 40.5833 61 40.5833C54.5567 40.5833 49.3333 45.8067 49.3333 52.25C49.3333 58.6933 54.5567 63.9167 61 63.9167Z" fill="#EC4831" />
                </svg>
                <img src={locationImg} alt="" />
            </div>
        </div>
    )
}
import React from "react";
import maskImg from "../Images/Mask.png"
import bookImg from "../Images/book.png"
import jamoa1 from "../Images/jamoa1.png"
import jamoa2 from "../Images/jamoa2.png"
import jamoa3 from "../Images/jamoa3.png"
import jamoa4 from "../Images/jamoa4.png"
import blog1 from "../Images/blog1.png"
import blog2 from "../Images/blog2.png"
import blog3 from "../Images/blog3.png"
import blog4 from "../Images/blog4.png"





export default function About() {
    return (
        <div className="container">
            <div className="row aboutRow">
                <div className="col-md-6 col-sm-12">
                    <h1>Infinity haqida
                        <span className="m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="26" viewBox="0 0 108 36" fill="none">
                                <path d="M0.5 18H105.866M105.866 18L89.8658 34M105.866 18L89.8658 2" stroke="black" strokeWidth="3" />
                            </svg>
                        </span>
                    </h1>
                    <p className="mt-5 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    <p className="mt-5 mb-5">Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                    </p>
                    <p className="mt-5 mb-5">Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        as opposed to using 'Content here, content here', making
                        it look like readable English. Many desktop publishing packages and web page editors now
                    </p>
                </div>
                <div className="col-md-6 col-sm-12 ajoyibImgDiv">
                    <div className="text-center ajoyibDiv">
                        <h6 className="natijalar">Ajoyib natijalar</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 331 331" fill="none" className="circle">
                            <path fillRule="evenodd" clipRule="evenodd" d="M165.5 331C256.903 331 331 256.903 331 165.5C331 74.0969 256.903 0 165.5 0C74.0969 0 0 74.0969 0 165.5C0 256.903 74.0969 331 165.5 331ZM304.494 198.148C305.142 195.05 303.023 192.091 299.9 191.568C296.778 191.046 293.836 193.156 293.177 196.253C287.229 224.209 272.286 249.513 250.556 268.241C227.376 288.218 197.935 299.453 167.339 299.997C136.743 300.541 106.921 290.359 83.0461 271.218C60.6644 253.274 44.8316 228.517 37.8941 200.79C37.1256 197.719 34.1102 195.714 31.0084 196.348C27.9066 196.981 25.8941 200.013 26.6517 203.087C34.1322 233.437 51.4043 260.544 75.875 280.163C101.839 300.979 134.27 312.051 167.543 311.46C200.816 310.868 232.833 298.65 258.041 276.925C281.799 256.449 298.097 228.745 304.494 198.148Z" fill="#D0E7F1" />
                        </svg>
                    </div>
                    <div className="mask">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className="star1">
                                <path d="M13 0L13.3197 0.86399C15.3454 6.33838 19.6616 10.6546 25.136 12.6803L26 13L25.136 13.3197C19.6616 15.3454 15.3454 19.6616 13.3197 25.136L13 26L12.6803 25.136C10.6546 19.6616 6.33838 15.3454 0.86399 13.3197L0 13L0.86399 12.6803C6.33838 10.6546 10.6546 6.33838 12.6803 0.86399L13 0Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 47 47" fill="none" className="star2">
                                <path d="M15.6392 0.966562L21.6953 8.26301C25.4233 12.7546 30.9275 15.3934 36.7639 15.487L46.245 15.6392L38.9485 21.6953C34.4569 25.4233 31.8182 30.9275 31.7245 36.7639L31.5723 46.245L25.5162 38.9485C21.7882 34.457 16.284 31.8182 10.4476 31.7245L0.966543 31.5723L8.263 25.5163C12.7546 21.7883 15.3933 16.284 15.487 10.4476L15.6392 0.966562Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 76 76" fill="none" className="yellowPlus">
                                <rect x="20.8789" width="35.0769" height="76" fill="#FFD600" />
                                <rect x="76" y="20.8791" width="34.2418" height="76" transform="rotate(90 76 20.8791)" fill="#FFD600" />
                            </svg>
                        </div>
                        <img src={maskImg} alt="" className="maskImg" />
                    </div>
                    <div className="bookDiv">
                        <h4 className="text-center">Zamonaviy kasblar</h4>
                        <p>since 2021</p>
                        <img src={bookImg} alt="" className="bookImg" />
                    </div>
                </div>

                <p className="jamoa">Bizning jamoa</p>
                <div className="row jamoaRow">
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa1} alt="" />
                        <h4 className="jamoaIsm">Abdushukur Urinboyev</h4>
                        <p>Info@gmail.com</p>
                        <button>Frontend dasturlash</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa2} alt="" />
                        <h4 className="jamoaIsm">Yunusali Qo'ziyev</h4>
                        <p>Info@gmail.com</p>
                        <button>Administratsiya</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa3} alt="" />
                        <h4 className="jamoaIsm">Abdulboriy Nabijonov</h4>
                        <p>Info@gmail.com</p>
                        <button>General English</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa4} alt="" />
                        <h4 className="jamoaIsm">Abdurashid Nabijonov</h4>
                        <p>Info@gmail.com</p>
                        <button>Backend dasturlash</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa3} alt="" />
                        <h4 className="jamoaIsm">Lochin Boy</h4>
                        <p>Info@gmail.com</p>
                        <button>General English</button>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <img src={jamoa4} alt="" />
                        <h4 className="jamoaIsm">Abdurashid Nabijonov</h4>
                        <p>Info@gmail.com</p>
                        <button>Backend dasturlash</button>
                    </div>
                </div>

                <p className="jamoa mt-5">Blog</p>
                <div className="row blogRow">
                    <div className="col-md-6 col-sm-12">
                        <img src={blog1} alt="" className="blogImg1" />
                        <div className="info">
                            <p>12 Aprel 2022 y.
                                <span className="m-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="icon">
                                        <path d="M8 5H10V10H15V12H8V5Z" fill="black" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="black" />
                                    </svg> 14 : 00
                                </span>
                            </p>
                            <h3 className="fs-5 mb-4 mt-4">“Best Essay” musobaqasi</h3>
                            <p style={{ width: "80%", opacity: "0.8" }}>Many desktop publishing packages and web page editors now use Lorem Ipsum
                                as their default model text, and a search for 'lorem ipsum' will
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row borderMini mb-5">
                            <div className="col-md-4 col-sm-6">
                                <img src={blog2} alt="" className="p-2 blogImg" />
                            </div>
                            <div className="col-md-8 col-sm-6 info2">
                                <h3 className="mt-2">“Best Essay” musobaqasi</h3>
                                <p style={{ width: "80%", opacity: "0.8" }}>Many desktop publishing packages and web page editors now use </p>
                                <p>12 Aprel 2022 y.
                                    <span className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="icon">
                                            <path d="M8 5H10V10H15V12H8V5Z" fill="black" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="black" />
                                        </svg> 14 : 00
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="row borderMini mb-5">
                            <div className="col-md-4 col-sm-6">
                                <img src={blog3} alt="" className="p-2 blogImg" />
                            </div>
                            <div className="col-md-8 col-sm-6 info2">
                                <h3 className="mt-2">Coffee party</h3>
                                <p style={{ width: "80%", opacity: "0.8" }}>Many desktop publishing packages and web page editors now use </p>
                                <p>12 Aprel 2022 y.
                                    <span className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="icon">
                                            <path d="M8 5H10V10H15V12H8V5Z" fill="black" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="black" />
                                        </svg> 14 : 00
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="row borderMini mb-5 lala">
                            <div className="col-md-4 col-sm-6">
                                <img src={blog4} alt="" className="p-2 blogImg" />
                            </div>

                            <div className="col-md-8 col-sm-6 info2">
                                <h3 className="mt-2">Kids play</h3>
                                <p style={{ width: "80%", opacity: "0.8" }}>Many desktop publishing packages and web page editors now use </p>
                                <p>12 Aprel 2022 y.
                                    <span className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="icon">
                                            <path d="M8 5H10V10H15V12H8V5Z" fill="black" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z" fill="black" />
                                        </svg> 14 : 00
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
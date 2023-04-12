import React, { useState } from "react";
import { Link } from "react-router-dom";
import teacherImg from "./../Images/teacher.png"
import caruselImg from "./../Images/rightImg.png"
import img1 from "./../Images/img1.png"
import img2 from "./../Images/img2.png"
import img3 from "./../Images/img3.png"
import img4 from "./../Images/img4.png"
import img5 from "./../Images/img5.png"

export default function Yonalishlar() {

    return (
        <div className="container">
            <div className="row mt-5 w-100 myCarusel">
                <div className="col-md-8 col-sm-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators caruselUl">
                            <ul>
                                <Link to="/error"><button className='batafsil'>Batafsil</button></Link>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></li>
                            </ul>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                Zamonaviy kasblarni biz <br /> bilan o'rganing
                            </div>
                            <div className="carousel-item">
                                We change lives through <br /> education
                            </div>
                            <div className="carousel-item">
                                Hayotingizni ta'lim orqali <br /> o'zgartiramiz
                            </div>
                            <div className="carousel-item">
                                Study modern subjects <br /> with us
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <img src={caruselImg} alt="" className='w-100 caruselImg' />
                </div>
            </div>

            {/* yonalishlar */}
            <div className="yonalishlar">
                <p>Asosiy yo'nalishlar</p>
                <div className="row text-dark">
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <h3>Dasturlash</h3>
                            <p>More than 12 courses</p>
                            <a href="/dasturlash" className="m-2">view</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <h3>Ingliz tili</h3>
                            <p>More than 12 courses</p>
                            <a href="/english" className="m-2">view</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <h3>Matematika</h3>
                            <p>More than 12 courses</p>
                            <a href="/" className="m-2">view</a>
                        </div>
                    </div>
                </div>
            </div>


            {/* nega */}
            <p className="paragraf">Nega aynan biz?</p>
            <div className="row whyDiv">
                <div className="col-md-3 col-sm-12">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="icons trp">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6667 20.4999C19.4704 19.7278 22.3333 16.3649 22.3333 12.3333V0.666626H5.66667V12.3333C5.66667 16.3649 8.5296 19.7278 12.3333 20.4999V24H9V27.3333H19V24H15.6667V20.4999ZM9 3.99996H19V12.3333C19 15.0947 16.7614 17.3333 14 17.3333C11.2386 17.3333 9 15.0947 9 12.3333V3.99996Z" fill="#E79215" />
                            <path d="M24 3.99996H27.3333V12.3333H24V3.99996Z" fill="#E79215" />
                            <path d="M4 3.99996H0.666672V12.3333H4V3.99996Z" fill="#E79215" />
                        </svg>
                        <Link to="/error" className="m-3">Trusted methods</Link>
                    </p>
                    <p className="m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 27" fill="none" className="icons">
                            <path d="M6.00001 11.1667C6.27615 11.1667 6.50001 11.3906 6.50001 11.6667V23.4167C6.50001 23.6928 6.27615 23.9167 6.00001 23.9167H1.33334C1.0572 23.9167 0.833344 23.6928 0.833344 23.4167V11.6667C0.833344 11.3906 1.0572 11.1667 1.33334 11.1667H6.00001ZM10.75 26.75C9.99856 26.75 9.27789 26.4515 8.74654 25.9202C8.21519 25.3888 7.91668 24.6682 7.91668 23.9167V11.1667C7.91668 10.3875 8.22834 9.67921 8.75251 9.16921L17.7206 0.187464C17.9158 -0.00805081 18.2326 -0.00817099 18.428 0.187196L19.5758 1.33504C19.9583 1.71754 20.1992 2.24171 20.1992 2.82254L20.1567 3.27587L18.9359 9.14828C18.8714 9.45871 19.1084 9.75004 19.4255 9.75004H26.3333C27.9058 9.75004 29.1667 11.025 29.1667 12.5834V15.4167C29.1667 15.785 29.0958 16.125 28.9683 16.4509L24.69 25.0217C24.265 26.0417 23.2592 26.75 22.0833 26.75H10.75ZM10.75 23.4167C10.75 23.6928 10.9739 23.9167 11.25 23.9167H21.8154C22.0056 23.9167 22.1792 23.8089 22.2635 23.6385L26.2815 15.5215C26.3156 15.4526 26.3333 15.3767 26.3333 15.2997V13.0834C26.3333 12.8072 26.1095 12.5834 25.8333 12.5834H15.9149C15.5969 12.5834 15.3597 12.2905 15.4258 11.9795L16.547 6.7009C16.6505 6.21368 16.0557 5.89126 15.7039 6.24387L10.8961 11.0628C10.8025 11.1566 10.75 11.2836 10.75 11.416V23.4167Z" fill="#E79215" />
                        </svg>
                        <Link to="/error">Experienced teachers</Link>
                    </p>
                    <p className="starIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 31" fill="none" className="icons">
                            <path d="M16.2584 21.8061C16.0995 21.7101 15.9005 21.7101 15.7416 21.8061L10.7453 24.8224C10.367 25.0508 9.90015 24.7122 9.99973 24.2817L11.3155 18.5932C11.3573 18.4128 11.2959 18.2242 11.156 18.1029L6.74481 14.2762C6.41076 13.9865 6.58971 13.4376 7.03036 13.4003L12.8493 12.9088C13.0342 12.8932 13.1953 12.7764 13.2676 12.6054L15.5396 7.23789C15.7117 6.83108 16.2883 6.83109 16.4605 7.23789L18.7324 12.6054C18.8047 12.7764 18.9658 12.8932 19.1507 12.9088L24.9697 13.4003C25.4103 13.4376 25.5893 13.9865 25.2552 14.2763L20.844 18.1029C20.7041 18.2242 20.6428 18.4128 20.6845 18.5932L22.0003 24.2817C22.0999 24.7122 21.633 25.0508 21.2547 24.8224L16.2584 21.8061ZM31.771 12.176C32.1053 11.8864 31.9266 11.3372 31.4859 11.2999L20.9838 10.4089C20.799 10.3932 20.6381 10.2765 20.5657 10.1058L16.4604 0.41956C16.2881 0.0130458 15.7119 0.0130448 15.5397 0.419559L11.4343 10.1058C11.362 10.2765 11.201 10.3932 11.0162 10.4089L0.512663 11.3C0.0721667 11.3374 -0.106668 11.886 0.227204 12.1758L8.18934 19.0861C8.3292 19.2075 8.39051 19.3962 8.34868 19.5766L5.96716 29.8479C5.86733 30.2784 6.33422 30.6173 6.7126 30.3889L15.7416 24.9393C15.9005 24.8434 16.0995 24.8434 16.2584 24.9393L25.2855 30.3877C25.6642 30.6163 26.1313 30.2768 26.0308 29.8461L23.6352 19.5773C23.5931 19.3965 23.6545 19.2073 23.7948 19.0858L31.771 12.176Z" fill="#E79215" />
                        </svg>
                        <Link to="/error">Extra lessons</Link>
                    </p>
                    <Link to="/error"><button className="batafsil btf2">Batafsil</button></Link>
                </div>
                <div className="col-md-3 col-sm-12 colmd3">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 37" fill="none" className="icons trp">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.1202 16.1202C22.1202 19.8021 19.1354 22.7868 15.4535 22.7868C11.7716 22.7868 8.78688 19.8021 8.78688 16.1202C8.78688 12.4383 11.7716 9.45349 15.4535 9.45349C19.1354 9.45349 22.1202 12.4383 22.1202 16.1202ZM18.7869 16.1202C18.7869 17.9611 17.2945 19.4535 15.4535 19.4535C13.6126 19.4535 12.1202 17.9611 12.1202 16.1202C12.1202 14.2792 13.6126 12.7868 15.4535 12.7868C17.2945 12.7868 18.7869 14.2792 18.7869 16.1202Z" fill="#E79215" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.65691 26.5304C-1.34296 20.8181 -1.57606 11.3234 4.13627 5.32357C9.84859 -0.676302 19.3432 -0.909402 25.3431 4.80292C31.343 10.5153 31.5761 20.0099 25.8637 26.0097L15.5206 36.8735L4.65691 26.5304ZM23.4496 23.7113L15.4049 32.1608L6.95538 24.1162C2.28881 19.6733 2.10751 12.2886 6.55043 7.62203C10.9934 2.95547 18.378 2.77417 23.0446 7.21709C27.7112 11.66 27.8925 19.0447 23.4496 23.7113Z" fill="#E79215" />
                        </svg>
                        <Link to="/error" className="m-3">Comfortable location</Link>
                    </p>
                    <p style={{ position: "relative", left: "10px", top: "-0.5px" }} className="like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 27" fill="none" className="icons">
                            <path d="M6.00001 11.1667C6.27615 11.1667 6.50001 11.3906 6.50001 11.6667V23.4167C6.50001 23.6928 6.27615 23.9167 6.00001 23.9167H1.33334C1.0572 23.9167 0.833344 23.6928 0.833344 23.4167V11.6667C0.833344 11.3906 1.0572 11.1667 1.33334 11.1667H6.00001ZM10.75 26.75C9.99856 26.75 9.27789 26.4515 8.74654 25.9202C8.21519 25.3888 7.91668 24.6682 7.91668 23.9167V11.1667C7.91668 10.3875 8.22834 9.67921 8.75251 9.16921L17.7206 0.187464C17.9158 -0.00805081 18.2326 -0.00817099 18.428 0.187196L19.5758 1.33504C19.9583 1.71754 20.1992 2.24171 20.1992 2.82254L20.1567 3.27587L18.9359 9.14828C18.8714 9.45871 19.1084 9.75004 19.4255 9.75004H26.3333C27.9058 9.75004 29.1667 11.025 29.1667 12.5834V15.4167C29.1667 15.785 29.0958 16.125 28.9683 16.4509L24.69 25.0217C24.265 26.0417 23.2592 26.75 22.0833 26.75H10.75ZM10.75 23.4167C10.75 23.6928 10.9739 23.9167 11.25 23.9167H21.8154C22.0056 23.9167 22.1792 23.8089 22.2635 23.6385L26.2815 15.5215C26.3156 15.4526 26.3333 15.3767 26.3333 15.2997V13.0834C26.3333 12.8072 26.1095 12.5834 25.8333 12.5834H15.9149C15.5969 12.5834 15.3597 12.2905 15.4258 11.9795L16.547 6.7009C16.6505 6.21368 16.0557 5.89126 15.7039 6.24387L10.8961 11.0628C10.8025 11.1566 10.75 11.2836 10.75 11.416V23.4167Z" fill="#E79215" />
                        </svg>
                        <Link to="/error">Experienced teachers</Link>
                    </p>
                    <p className="starIcon" style={{ position: "relative", top: "-0.5px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 31" fill="none" className="icons">
                            <path d="M16.2584 21.8061C16.0995 21.7101 15.9005 21.7101 15.7416 21.8061L10.7453 24.8224C10.367 25.0508 9.90015 24.7122 9.99973 24.2817L11.3155 18.5932C11.3573 18.4128 11.2959 18.2242 11.156 18.1029L6.74481 14.2762C6.41076 13.9865 6.58971 13.4376 7.03036 13.4003L12.8493 12.9088C13.0342 12.8932 13.1953 12.7764 13.2676 12.6054L15.5396 7.23789C15.7117 6.83108 16.2883 6.83109 16.4605 7.23789L18.7324 12.6054C18.8047 12.7764 18.9658 12.8932 19.1507 12.9088L24.9697 13.4003C25.4103 13.4376 25.5893 13.9865 25.2552 14.2763L20.844 18.1029C20.7041 18.2242 20.6428 18.4128 20.6845 18.5932L22.0003 24.2817C22.0999 24.7122 21.633 25.0508 21.2547 24.8224L16.2584 21.8061ZM31.771 12.176C32.1053 11.8864 31.9266 11.3372 31.4859 11.2999L20.9838 10.4089C20.799 10.3932 20.6381 10.2765 20.5657 10.1058L16.4604 0.41956C16.2881 0.0130458 15.7119 0.0130448 15.5397 0.419559L11.4343 10.1058C11.362 10.2765 11.201 10.3932 11.0162 10.4089L0.512663 11.3C0.0721667 11.3374 -0.106668 11.886 0.227204 12.1758L8.18934 19.0861C8.3292 19.2075 8.39051 19.3962 8.34868 19.5766L5.96716 29.8479C5.86733 30.2784 6.33422 30.6173 6.7126 30.3889L15.7416 24.9393C15.9005 24.8434 16.0995 24.8434 16.2584 24.9393L25.2855 30.3877C25.6642 30.6163 26.1313 30.2768 26.0308 29.8461L23.6352 19.5773C23.5931 19.3965 23.6545 19.2073 23.7948 19.0858L31.771 12.176Z" fill="#E79215" />
                        </svg>
                        <Link to="/error">Extra lessons</Link>
                    </p>
                </div>
                <div className="col-md-6 col-sm-12 text-end">
                    <img src={teacherImg} alt="" className="teacherImg img-fluid" />
                </div>
            </div>

            {/* Bizning galereya */}

            <p className="paragraf">Bizning galereya</p>
            <div className="row mb-5 galereyaRow">
                <div className="col-md-8 col-sm-12 img1Div">
                    <img src={img1} alt="" className="img1" />
                    <div className="overlay">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
                <div className="col-md-4 col-sm-6 img1Div">
                    <img src={img2} alt="" className="imageAll images" />
                    <div className="overlay overlay2">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
                <div className="col-md-4 col-sm-6 img1Div">
                    <img src={img3} alt="" className="imageAll images2" />
                    <div className="overlay overlay3 over3">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
                <div className="col-md-4 col-sm-6 img1Div">
                    <img src={img4} alt="" className="imageAll images2 imgs2" />
                    <div className="overlay overlay3 over4">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
                <div className="col-md-4 col-sm-6 img1Div">
                    <img src={img5} alt="" className="imageAll images2 imgs2 img5" />
                    <div className="overlay overlay3 over5">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</div>
                </div>
            </div>

        </div>

    )
}
import React from "react";
import foundationImg from "./../Images/foundation.png"
import htmlImg from "./../Images/html.png"
import reactImg from "./../Images/react.png"
import computerImg from "./../Images/computer.png"
import contactImg from "./../Images/contact.png"

export default function Dasturlash() {
    return (
        <div>
            <div className="container dasturlash">
                <p className="mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none" className="m-4">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 21.8787C1.34315 21.8787 0 20.5355 0 18.8787V8.87866C0 8.84477 0.00168633 8.81126 0.00498009 8.77823H0C0 8.20227 0.228801 7.64989 0.636071 7.24262L6.87868 1.00002C8.05025 -0.171555 9.94974 -0.171555 11.1213 1.00002L17.3639 7.24264C17.7712 7.6499 18 8.20227 18 8.77823H17.995C17.9983 8.81126 18 8.84477 18 8.87866V18.8787C18 20.5355 16.6569 21.8787 15 21.8787H3ZM9.7071 2.41423L16 8.70713V18.8787C16 19.4309 15.5523 19.8787 15 19.8787H12V14.8787C12 13.2218 10.6569 11.8787 9 11.8787C7.34315 11.8787 6 13.2218 6 14.8787V19.8787H3C2.44772 19.8787 2 19.4309 2 18.8787V8.7072L8.29289 2.41423C8.68341 2.02371 9.31658 2.02371 9.7071 2.41423Z" fill="black" />
                    </svg>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none" className='infDrop'>
                            <path opacity="0.2" d="M1.27274 0.897705V40.8977" stroke="#333333" strokeWidth="1.52273" />
                        </svg>
                    </span>
                    <span className="fs-5 fw-500">Dasturlash</span>
                </p>
                <div className="border">
                    <div className="row">
                        <div className="col-md-6 text-center"><img src={foundationImg} alt="" className="foundationImg" /></div>
                        <div className="col-md-6 text-end dasturlashText">
                            <h1>Foundation</h1>
                            <p>Dasturlash sohasi bo'yicha hech qanday bilimga ega bo'lmagan har qanday inson dasturlash saboqlarini o'rganishi mumkin</p>
                            <button className="batafsilBtn m-2">Batafsil</button>
                            <button className="qabul">Kursga yozilish</button>
                        </div>
                    </div>
                </div>
                <div className="border frontendBorder">
                    <div className="row">
                        <div className="col-md-6 text-start dasturlashText frontendText">
                            <h1>Frontend</h1>
                            <p>Dasturlash sohasi bo'yicha hech qanday bilimga ega bo'lmagan har qanday inson dasturlash saboqlarini o'rganishi mumkin</p>
                            <button className="batafsilBtn m-2">Batafsil</button>
                            <button className="qabul">Kursga yozilish</button>
                        </div>
                        <div className="col-md-6 text-end"><img src={htmlImg} alt="" className="foundationImg htmlImg" /></div>
                    </div>
                </div>
                <div className="border">
                    <div className="row">
                        <div className="col-md-6 text-center"><img src={computerImg} alt="" className="computerImg" /></div>
                        <div className="col-md-6 text-end dasturlashText">
                            <h1>Backend</h1>
                            <p>Dasturlash sohasi bo'yicha hech qanday bilimga ega bo'lmagan har qanday inson dasturlash saboqlarini o'rganishi mumkin</p>
                            <button className="batafsilBtn m-2">Batafsil</button>
                            <button className="qabul">Kursga yozilish</button>
                        </div>
                    </div>
                </div>
                <div className="border frontendBorder">
                    <div className="row">
                        <div className="col-md-6 text-start dasturlashText frontendText">
                            <h1>React</h1>
                            <p>Dasturlash sohasi bo'yicha hech qanday bilimga ega bo'lmagan har qanday inson dasturlash saboqlarini o'rganishi mumkin</p>
                            <button className="batafsilBtn m-2">Batafsil</button>
                            <button className="qabul">Kursga yozilish</button>
                        </div>
                        <div className="col-md-6 text-end"><img src={reactImg} alt="" className="reactImg" /></div>
                    </div>
                </div>
            </div>
            <div className="container cont">
                <div className="m-3 CONTACTDiv">
                    <p>CONTACT</p>
                    <h3>Interested in Us?</h3>
                </div>
                <div className="contactContainer">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 borderContactImg">
                            <img src={contactImg} alt="" className="contactImg w-100" />
                        </div>
                        <div className="col-md-8 col-sm-12 text-center">
                            <input type="text" placeholder="Name:" /> <br />
                            <input type="text" placeholder="Number: +998" /> <br />
                            <input type="text" placeholder="E-mail::" /><br />
                            <button className="sendBtn" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
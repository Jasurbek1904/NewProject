import React from "react";
import FoundationImg from "../Images/foundation2.png"

export default function Foundation() {
    return (
        <div className="container Foundation">
            <div className="border">
                <div className="row foundationRow">
                    <div className="col-md-6 col-sm-12 foundationDiv">
                        <h1>Foundation</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of
                            using is that it has a more-or-less normal distribution
                        </p>
                        <button className="batafsilBtn">Kursga yozilish</button>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center imgDiv">
                        <img src={FoundationImg} alt="" className="foundationImg" />
                        <img src={FoundationImg} alt="" className="foundationImg2" />
                    </div>
                </div>
            </div>

            <div className="row mt-5 IconRow">
                <div className="col-md-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none" className="iconsFoun time">
                        <path d="M20.4168 12.7916H25.5002V25.5H38.2085V30.5833H20.4168V12.7916Z" fill="#3F3D56" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.9168 25.5C50.9168 39.5372 39.5374 50.9166 25.5002 50.9166C11.4629 50.9166 0.0834961 39.5372 0.0834961 25.5C0.0834961 11.4627 11.4629 0.083313 25.5002 0.083313C39.5374 0.083313 50.9168 11.4627 50.9168 25.5ZM45.8335 25.5C45.8335 36.7298 36.73 45.8333 25.5002 45.8333C14.2704 45.8333 5.16683 36.7298 5.16683 25.5C5.16683 14.2702 14.2704 5.16665 25.5002 5.16665C36.73 5.16665 45.8335 14.2702 45.8335 25.5Z" fill="#3F3D56" />
                    </svg>
                    <span>6 oy</span>
                </div>
                <div className="col-md-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none" className="iconsFoun pen">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M49.0448 0.82775C48.0523 -0.164833 46.443 -0.164833 45.4504 0.82775L43.2332 3.04498C40.3989 1.69103 36.9014 2.18784 34.5538 4.53541L7.59536 31.4939L21.9732 45.8717L48.9316 18.9133C51.2792 16.5657 51.776 13.0682 50.4221 10.2339L52.6393 8.01667C53.6319 7.02409 53.6319 5.41479 52.6393 4.42221L49.0448 0.82775ZM38.197 22.4589L21.9732 38.6828L14.7843 31.4939L31.0081 15.27L38.197 22.4589ZM42.8185 17.8375L45.3372 15.3188C46.3298 14.3262 46.3298 12.7169 45.3372 11.7243L41.7427 8.12987C40.7501 7.13729 39.1409 7.13729 38.1483 8.12987L35.6296 10.6486L42.8185 17.8375Z" fill="#3F3D56" />
                        <path d="M0.0834961 53.3318L5.47617 33.5613L19.853 47.9401L0.0834961 53.3318Z" fill="#3F3D56" />
                    </svg>
                    <span>online/offline</span>
                </div>
                <div className="col-md-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none" className="iconsFoun mathPlus">
                        <path d="M20.4998 0.166687C19.0961 0.166687 17.9582 1.30463 17.9582 2.70835V17.9584H2.70817C1.30445 17.9584 0.166504 19.0963 0.166504 20.5C0.166504 21.9037 1.30445 23.0417 2.70817 23.0417H17.9582V38.2917C17.9582 39.6954 19.0961 40.8334 20.4998 40.8334C21.9036 40.8334 23.0415 39.6954 23.0415 38.2917V23.0417H38.2915C39.6952 23.0417 40.8332 21.9037 40.8332 20.5C40.8332 19.0963 39.6952 17.9584 38.2915 17.9584H23.0415V2.70835C23.0415 1.30463 21.9036 0.166687 20.4998 0.166687Z" fill="#3F3D56" />
                    </svg>
                    <span>1 oy praktika</span>
                </div>
            </div>

            <div className="row KursRow">
                <h4 className="mt-5 mb-5">Kurs kimlar uchun?</h4>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>
                <div className="col-md-4 col-sm-6 mb-5">
                    <h4>Interyerning uslubiy kontsptsiyasini yaratishni</h4>
                    <p>Interyerlar dizayni asoslarini o'rganasiz. Birinchi loyihangizni, noldan: mudborddan boshlab ishchi chizmalargacha yaratasiz.</p>
                    <hr />
                </div>

            </div>
        </div>
    )
}
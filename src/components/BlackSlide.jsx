import logo from "../assets/Logo.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import pinteres from "../assets/pinterest.svg"
import gplus from "../assets/google plus.svg"
import inst from "../assets/instagram.svg"
import bit from "../assets/Bitmap Copy 17.png"
import bit2 from "../assets/Bitmap Copy 18.png"
import bit3 from "../assets/Bitmap Copy 19.png"


export const BlackSlide = () => {

    return (
        <div className="black-slide">
            <div className="sectors">
                <div className="sector-1">
                    <img src={logo} alt="" />
                    <p>Short description about the company Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <br />
                    <b>Keep in touch</b>
                    <div>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={pinteres} alt="" />
                        <img src={gplus} alt="" />
                        <img src={inst} alt="" />
                    </div>

                </div>
                <div className="sector-2">
                    <b>Recent posts</b>
                    <div className="sec-2">
                        <img src={bit} alt="" />
                        <div>
                            <h4>One of Saturn’s largest rings may be newer than…</h4>
                            <i>Rickie Baroch - June 6, 2019</i>
                        </div>
                    </div>
                    <div className="sec-2">
                        <img src={bit2} alt="" />
                        <div>
                        <h4>One of Saturn’s largest rings may be newer than…</h4>
                            <i>Rickie Baroch - June 6, 2019</i>
                        </div>
                    </div>
                    <div className="sec-2">
                        <img src={bit3} alt="" />
                        <div>
                        <h4>One of Saturn’s largest rings may be newer than…</h4>
                            <i>Rickie Baroch - June 6, 2019</i>
                        </div>
                    </div>
                </div>
                <div className="sector-3">
                    <div className="email">
                        <h3>Newsletter</h3>
                        <div className="adress">Your name</div>
                        <div className="adress">Your email adress</div>
                        <div className="long-button">
                            <b>Subscribe to newsletter</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
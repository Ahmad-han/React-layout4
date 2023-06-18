import inst from "../assets/instagram (6) copy 4.svg"
import pagani from "../assets/pagani.png"
import r8 from "../assets/R8.png"
import huynday from "../assets/Hyunday.png"
import focus from "../assets/Focus.png"
import juke from "../assets/juke.png"
import ferrari from "../assets/Ferrari.png"



export const Instagram = () => {

    return (
        <div className="instagram">
                <h3>Instagram</h3>
                <div className="side-section">
                    <img src={pagani} alt="" />
                    <img src={r8} alt="" />
                    <img src={huynday} alt="" />
                    <img src={focus} alt="" />
                    <img src={juke} alt="" />
                    <img src={ferrari} alt="" />
                </div>
                <div className="long-button">
                    <img src={inst} alt="" />
                    <b>View instagram</b>
                </div>
            </div>
    )
}
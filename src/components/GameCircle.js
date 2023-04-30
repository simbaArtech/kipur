import cube from "../assets/pictures/cube.png";

export default function GameCircle() {
    const circleStyle = {
        background: "#475E36",
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        position: "relative",
        left: "1.2rem",
        bottom: "0.7rem"
    }

    const imgStyle = {
        padding: "20%",
        width: "2.2rem",
        position: "relative",
    }

    const blackFadeStyle = {
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "4rem",
        background: "linear-gradient(to bottom, transparent, #000000d9)"
    }

    return (
        <div style={blackFadeStyle}>
            <div style={circleStyle}>
                <img src={cube} style={imgStyle} />
            </div>
        </div>
    )
}
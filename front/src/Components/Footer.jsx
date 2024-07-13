import Logo from '../Assets/icongrab.png'

const Footer = () => {
    return (
        <footer style={{ display: "flex", justifyContent: "space-around", alignContent: "center", paddingTop: "2%", paddingBottom: "2%" }}>
            <p style={{ fontweight: "bold", width: "300px", textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna

            </p>
            <img src={Logo} alt="prb_header" style={{ objectFit: "fill", height: "120px", width: "200px" }} />
            <p style={{ fontweight: "bold", width: "200px", textAlign: "center" }}>
                All rights reserved to
                Lorem Ipsum© 2022
            </p>
        </footer >
    )
}

export default Footer
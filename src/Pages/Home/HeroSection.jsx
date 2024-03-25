export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Nathan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Fullstack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        I am a computer science major passionate about the development of websites and applications,
                        <br /> motivated by prospect of attaining knowledge and sharing it with others.
                    </p> 
                </div>
                <a href="https://www.linkedin.com/in/lamnathanwsu" target="_blank">
                <button className="btn btn-primary">Connect</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/nathanlam.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}
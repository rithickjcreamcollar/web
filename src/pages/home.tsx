import "../styles/home.css";
const Home: React.FC = () => {
  const scrollToSection2 = () => {
    const section2 = document.querySelector(".section2");
    if (section2) {
      section2.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="page">
      <section className="section1" onClick={scrollToSection2}>
        <p className="jk">jk.</p>
        <p className="silk"> Silk Sarees</p>
      </section>
      <section className="section2">
        <div className="about-us">
          <p>
            Welcome to JK Silk Sarees, a leading manufacturer and wholesaler of
            premium quality sarees. With a rich heritage in the textile
            industry, we specialize in producing a wide range of sarees,
            including both polyester and silk variants.
          </p>
        </div>
      </section>
      <section className="section3">
        <h2>CONTACT US</h2>
        <p>This is the third section.</p>
      </section>
    </div>
  );
};

export default Home;

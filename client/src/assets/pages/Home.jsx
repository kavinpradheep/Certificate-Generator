import HomeCss from "../styles/Home.module.css";
import DownloadComplete from "../Components/DownloadComplete";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate("/generate");
  };
  return (
    <section className={HomeCss.home}>
      <div className={HomeCss.header}>
        <h2 className={HomeCss.heading}>Certificate Generator</h2>
      </div>
      <div className={HomeCss.contentBody}>
        <h3 className={HomeCss.getStarted}>Get Started</h3>
        <h4 className={HomeCss.generateCertificate}>
          Generate your certificate here!
        </h4>
        <button className={HomeCss.generateButton} onClick={navigateToPage}>
          Generate Certificate
        </button>
      </div>
    </section>
  );
};

export default Home;

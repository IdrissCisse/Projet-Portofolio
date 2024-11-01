import './index.scss';
import profil from '../../assets/images/photo-profil.avif';
import cvFile from '../../assets/files/CV_Alioune_I_C_Faye.pdf';

const Home = () => {
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file;
    const fileName = file.split('/').pop().split('.')[0] + '.pdf';
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="home">
      <div className="home-info">
        <h2 className="home-info-name">Alioune . I . C . Faye </h2>
        <h3 className="home-info-role">Développeur Full-Stack</h3>
        <p className="home-info-desc">
          Passionné par le développement web et l’univers numérique, je vous
          invite à découvrir mon parcours, mes compétences et les projets que
          j’ai réalisés, consultables sur mon{' '}
          <a
            href="https://github.com/IdrissCisse/"
            target="_blank"
            rel="noopener noreferrer"
            className="home-info-desc-link"
          >
            GitHub
          </a>
          .
        </p>
        <button className="home-info-cv" onClick={() => handleDownload(cvFile)}>
          Télécharger mon CV
        </button>
      </div>
      <div className="home-pic">
        <img src={profil} alt="Profil" />
      </div>
    </div>
  );
};

export default Home;

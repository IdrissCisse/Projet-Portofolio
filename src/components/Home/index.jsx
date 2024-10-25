import './index.scss';
import profil from '../../assets/images/photo-profil.avif';

const Home = () => {
  return (
    <div className="home">
      <div className="home-info">
        <h2 className="home-info-name">Alioune . I . C . Faye </h2>
        <h3 className="home-info-role">Développeur Full-Stack</h3>
        <p className="home-info-desc">
          Bienvenue sur mon portofolio ! On va explorer le parcours que j'ai
          suivi ainsi les compétences que j'y ai acquises à travers des projets
          concrets que vous pouvez retrouver sur mon{' '}
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
      </div>
      <div className="home-pic">
        <img src={profil} alt="Ma photo de profil" />
      </div>
    </div>
  );
};

export default Home;

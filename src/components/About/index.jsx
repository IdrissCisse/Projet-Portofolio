import React from 'react';
import './index.scss';
import Card from '../Card';
import skillsFile from '../../assets/files/Récaputilatif-compétences.pdf';
import formationFile from '../../assets/files/Programme-de-la-formation.pdf';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import sassIcon from '../../assets/icons/sass.svg';
import htmlIcon from '../../assets/icons/html-5.svg';
import downloadIcon from '../../assets/icons/download-button-svgrepo-com.svg';

const About = () => {
  const formations = [
    '- Baccalaureat Scientique - Maths/SP ',
    '- Cursus Developpement Web OpenClassrooms - Bac +2',
  ];
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file;
    const fileName = file.split('/').pop().split('.')[0] + '.pdf';
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const skills = [
    { icon: reactIcon, name: 'React logo' },
    { icon: htmlIcon, name: 'HTML5 Logo' },
    { icon: sassIcon, name: 'Sass Logo' },
    { icon: nodeIcon, name: 'Node logo' },
  ];

  return (
    <div className="about">
      <h2 className="about-title">À-propos</h2>
      <p className="about-text">
        Issu d'une formation intensive de niveau Bac +2 centrée sur des projets
        réalistes, j'ai acquis de solides compétences aussi bien en front-end
        qu'en back-end. Curieux et en constant apprentissage, je suis motivé à
        l'idée de réaliser des projets innovants et de progresser aux côtés de
        professionnels expérimentés.
      </p>
      <div className="about-content">
        <div className="about-content-formation">
          <Card
            title="Formation"
            image="https://www.fdesouche.com/wp-content/uploads/2022/02/image-80-1536x983.jpg"
            items={formations}
            showActions={true}
            actionContent={
              <React.Fragment>
                <img
                  src={downloadIcon}
                  alt="Télécharger le programme"
                  style={{ width: '1rem', marginRight: '0.5rem' }}
                />
                Programme
              </React.Fragment>
            }
            onActionClick={() => handleDownload(formationFile)}
            bgColor="#f7f9fb"
            textColor="#010816"
            cardWidth="100%"
            cardHeight={`${15}rem`}
            titleSize="1.6rem"
            textSize="1rem"
            itemsHeight="5rem"
          />
        </div>
        <div className="about-content-skills">
          <Card
            title="Compétences"
            image="https://f.hellowork.com/blogdumoderateur/2020/10/developpeur-web-1200x800.jpeg"
            items={skills.map((skill) => (
              <div
                className="skills-icon"
                key={skill.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '1rem',
                }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
            showActions={true}
            bgColor="#f7f9fb;"
            textColor="#010816"
            itemsDirection="row"
            itemsAlignment="center"
            itemsGap="2rem"
            cardWidth="100%"
            cardHeight={`${15}rem`}
            titleSize="1.6rem"
            itemsHeight="5rem"
            textSize="1.1rem"
            actionContent={
              <React.Fragment>
                <img
                  src={downloadIcon}
                  alt="Télécharger"
                  style={{ width: '1rem', marginRight: '0.5rem' }}
                />
                Récaputilatif Complet
              </React.Fragment>
            }
            onActionClick={() => handleDownload(skillsFile)}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

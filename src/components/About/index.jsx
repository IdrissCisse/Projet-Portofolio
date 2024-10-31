import React from 'react';
import './index.scss';
import Card from '../Card';
import skillsFile from '../../assets/files/Récaputilatif-compétences.pdf';
import formationFile from '../../assets/files/Programme-de-la-formation.pdf';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import mongodbIcon from '../../assets/icons/mongodb.svg';
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
    { icon: mongodbIcon, name: 'MongoDB Logo' },
    { icon: githubIcon, name: 'Github Logo' },
  ];

  return (
    <div className="about">
      <h2 className="about-title">Á-propos</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at,
        laboriosam modi natus sint quam accusamus quisquam voluptate
        voluptatibus assumenda explicabo dolor consequuntur cum alias quae quas
        ducimus eius ea.
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
                Télécharger le programme
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
            title="Skills"
            image="https://f.hellowork.com/blogdumoderateur/2020/10/developpeur-web-1200x800.jpeg"
            items={skills.map((skill) => (
              <div
                key={skill.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  marginRight: '2rem',
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: '3.2rem',
                    height: '3.2rem',
                  }}
                />
              </div>
            ))}
            showActions={true}
            bgColor="#f7f9fb;"
            textColor="#010816"
            itemsDirection="row"
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
                Récapitulatif complet
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

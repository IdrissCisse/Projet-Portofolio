import React from 'react';
import './index.scss';
import Card from '../Card';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/nodejs.svg';
import sassIcon from '../../assets/icons/sass.svg';
import htmlIcon from '../../assets/icons/html-5.svg';
import webIcon from '../../assets/icons/web-svgrepo-com.svg';

const About = () => {
  const formations = [
    '- Baccalaureat Scientique - Maths/SP ',
    '- Cursus Developpement Web OpenClassrooms - Bac +2',
  ];
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
            actionContent={<React.Fragment></React.Fragment>}
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
            bgColor="#f7f9fb"
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
                  src={webIcon}
                  alt="lien externe"
                  style={{ width: '1.3rem', height: '1.7rem',marginRight: '0.5rem' }}
                />
                Tableau de compétences
              </React.Fragment>
            }
            onActionClick={() => window.open("https://miro.com/app/board/uXjVLO7P7m0=/?share_link_id=356985712433", '_blank')}
           
          />
        </div>
      </div>
    </div>
  );
};

export default About;

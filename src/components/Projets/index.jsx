import './index.scss';
import Card from '../../components/Card';
import projectsData from '../../assets/accomodations.json';
import webIcon from '../../assets/icons/web-svgrepo-com.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import slidesIcon from '../../assets/icons/slides-svgrepo-com.svg';

import Tag from '../../components/Tag';

const Projets = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projets</h2>
      <div className="projects-content">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            items={[
              project.description,
              <div
                className="projects-content-skills-container"
                style={{ marginTop: '1rem', flexWrap: 'wrap' }}
              >
                {project.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>,
            ]}
            showActions={true}
            actionContent={
              <div
                className="projects-content-actions"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {project.links.website && (
                  <img
                    src={webIcon}
                    alt="Website"
                    style={{
                      cursor: 'pointer',
                      width: '1.7rem',
                      height: '1.7rem',
                      marginRight: '0.7rem',
                    }}
                    onClick={() => window.open(project.links.website, '_blank')}
                  />
                )}
                {project.links.github && (
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    style={{
                      cursor: 'pointer',
                      width: '1.7rem',
                      height: '1.7rem',
                    }}
                    onClick={() => window.open(project.links.github, '_blank')}
                  />
                )}
                {project.links.drive && (
                  <img
                    src={slidesIcon}
                    alt="Google Slides"
                    style={{
                      cursor: 'pointer',
                      width: '1.8rem',
                      height: '1.8rem',
                    }}
                    onClick={() => window.open(project.links.drive, '_blank')}
                  />
                )}
              </div>
            }
            onActionClick={() =>
              window.open(
                project.links.github || project.links.website,
                '_blank'
              )
            }
            bgColor="#f7f9fb"
            textColor="#010816"
            cardWidth="100%"
            cardHeight={`${16}rem`}
            titleSize="1.6rem"
            textSize="1rem"
            itemsHeight="fit-content"
          />
        ))}
      </div>
    </div>
  );
};

export default Projets;

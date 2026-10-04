import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { /*FaGithub, FaExternalLinkAlt,*/ FaItchIo, FaYoutube  } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "Pulbere",
    description: "Worked collaboratively on an First Person Telekinesis shooter designing the core Telekinesis mechanic and AI using Unreals State Trees.",
    image: "/Images/Projects/Pulbere.png",
    techStack: ["Unreal Engine 5", "C++"],
    itchUrl: "https://barely-stable-games.itch.io/pulbere",
  },
   {
    id: 2,
    title: "Space Ship Controller",
    description: "Developed a custom space ship player controller for Unreal Engine with full degrees of movement.",
    image: "/Images/Projects/SpaceShip.png",
    techStack: ["Unreal Engine 5", "C++"],
    youTubeUrl: "https://youtu.be/DbZRahriYhQ",
  },
  {
    id: 3,
    title: "FPS Level Editor",
    description: "Worked collaboratively on an FPS game working on Playstation 5 hardware by developing a level editor for PC that would allow levels to be created by a user, serialised to a Json file and then playable on PS5 hardware for the collaborative project.",
    image: "/Images/Projects/Editor.png",
    techStack: ["ENTT" , "Nlohmann JSON", "Jolt", "Dear ImGui", "PS5", "C++"],
    youTubeUrl: "https://youtube.com/watch?v=MeHMMtI4-Rg&feature=youtu.be",
  },
  {
    id: 4,
    title: "Modular Shaders",
    description: "Upadted an existing render to include shadowmapping for directional, point and spot lights, bloom post-processinf and a modular shader system that cleanly seperates the shaders and their data.",
    image: "/Images/Projects/ShaderProject.png",
    techStack: ["DirectX 11", "C++", "HLSL"],
    youTubeUrl: "https://youtu.be/mmCqVFfUS0U",
  },
  {
      id: 5,
      title: "Nimbus Nemesis",
      description: "Worked Collaboratively on a turn based strategy game developing the ship interior system, enemy AI using A* algorithm and a bunch more.",
      image: "/Images/Projects/NimbusNemesis.png",
      techStack: ["SFML 2", "C++"],
      youTubeUrl: "https://youtu.be/ftzIIyMgfqk",
    },
  {
      id: 6,
      title: "Clowning Around",
      description: "Worked Collaboratively during global game jam to make obstacle avoiding 2D game, working heavily on Item system and other bits of project.",
      image: "/Images/Projects/ClowningAround.png",
      techStack: ["Unity", "C#"],
      itchUrl: "https://https://apolllloo.itch.io/clowning-around",
    },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Featured Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.image} 
                role="img" 
                aria-label={`Screenshot of ${project.title}`} 
              />
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                {(/*project.githubUrl || */project.youTubeUrl || project.itchUrl) && (
                  <ProjectLinks>
                    <span style={{ width: '100%' }}>Project Links:</span>
                     {project.itchUrl && (
                      <a
                        href={project.itchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} Itch.io webpage`}
                      >
                        <FaItchIo aria-hidden="true" />
                        <span className="sr-only">Itch Page</span>
                      </a>
                    )}
                    {project.youTubeUrl && (
                      <a
                        href={project.youTubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} Youtube video Link`}
                      >
                        <FaYoutube aria-hidden="true" />
                        <span className="sr-only">Youtube Link</span>
                      </a>
                    )}
                    {/*project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    )*/}
                    
                    {/*project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span className="sr-only">Live site</span>
                      </a>
                    )*/}
                  </ProjectLinks>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;

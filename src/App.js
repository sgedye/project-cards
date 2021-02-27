import "./style/main.css";
import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  return (
    <main>
      <section className="project-section">
        {projects.map(({ title, blurb, cta }, idx) => (
          <ProjectCard key={idx}>
            <h1 className="title">{title}</h1>
            <p className="blurb">{blurb}</p>
            <button className="btn">{cta}</button>
          </ProjectCard>
        ))}
      </section>
    </main>
  );
}

export default App;

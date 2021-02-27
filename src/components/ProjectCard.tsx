import * as React from "react";
import { Project } from "../data/projects";

export const ProjectCard: React.FC<Project> = ({ children }) => (
  <div className="card">
    <div className="content">{children}</div>
  </div>
);

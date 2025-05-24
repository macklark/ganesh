import Project from "./project"

import { projects } from "@/lib/data"

export default function Projects() {
    return(
        <section>
            <h2 className="text-2xl font-bold tracking-light text-primary-foreground">Projects</h2>
            {projects.map((project, index) => (
                <a key={index} href={project.link} target="_blank">
                    <Project title={project.title} description={project.description} />
                </a>
            ))}
        </section>
    )
};
import { Container, Job, Project } from "@/components"
import { HomeProps } from "./types"
import { Metadata } from "next"

async function getData(): Promise<HomeProps> {
  // data is not shipped to client
  const module = await import("./data/data.json", { assert: { type: "json" } })

  const data = module.default

  return {
    title: data.profile.name,
    position: data.profile.job,
    description: data.profile.description,
    experiences: data.experience,
    projects: data.projects,
  }
}

export const metadata: Metadata = {
  title: "Pau Colomé | Front developer",
  description:
    "I have the goal of learning and contributing no matter where I go",
}

export default async function Home() {
  const { title, position, description, experiences, projects } =
    await getData()

  return (
    <>
      <div className="flex flex-col gap-16">
        <div
          className="container flex flex-col-reverse gap-8 md:flex-row md:gap-20"
          id="about"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold dark:text-white">{title}</h1>
            <h4 className="text-xl dark:text-white">{position}</h4>
            <p className="text-lg text-gray-500 dark:text-gray-200 text-justify">
              {description}
            </p>
          </div>
          <img
            src="me.jpeg"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full aspect-square object-cover"
          />
        </div>
        <Container title="Experience" separator>
          {experiences.map((experience, index) => (
            <Job
              key={experience.id}
              experience={experience}
              reversed={index % 2 !== 0}
            />
          ))}
        </Container>
        <Container title="Projects">
          {projects.map((project, index) => (
            <Project
              key={`project-${project.title}-${index}`}
              project={project}
            />
          ))}
        </Container>
      </div>
    </>
  )
}

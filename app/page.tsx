import data from "./data/data.json"
import { Container, Job, Project } from "./components"
import { HomeProps } from "./page.types"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps<HomeProps> = ctx => {
  return new Promise(resolve =>
    resolve({
      props: {
        title: data.profile.name,
        position: data.profile.job,
        description: data.profile.description,
        experiences: data.experience,
        projects: data.projects,
      },
    }),
  )
}

export default function Home({
  title,
  position,
  description,
  experiences,
  projects,
}: HomeProps) {
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
          {experiences.map((job, index) => (
            <Job
              key={`job-${job.company}-${index}`}
              job={job}
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

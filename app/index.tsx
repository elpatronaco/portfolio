import data from "./data/data.json"
import { Container, Job, Project } from "./components"

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16">
        {/* <Project project={data.projects[0]} /> */}
        <div
          className="container flex flex-col-reverse gap-8 md:flex-row md:gap-20"
          id="about"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-semibold dark:text-white">
              {data.profile.name}
            </h1>
            <h4 className="text-xl dark:text-white">{data.profile.job}</h4>
            <p className="text-lg text-gray-500 dark:text-gray-200 text-justify">
              {data.profile.description}
            </p>
          </div>
          <img
            src="me.jpeg"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full aspect-square object-cover"
          />
        </div>
        <Container title="Experience" separator>
          {data.experience.map((job, index) => (
            <Job
              key={`job-${job.company}-${index}`}
              job={job}
              reversed={index % 2 !== 0}
            />
          ))}
        </Container>
        <Container title="Projects">
          {data.projects.map((project, index) => (
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

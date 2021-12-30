import Link from 'next/link'
import propTypes from 'prop-types'

export default function Project({ project }) {
    if (!project) return null

    return (
        <Link className="min-w-10" href={project.href}>
            <div
                className={`container group min-w-fit aspect-[2/1] relative xs:aspect-[3/5] bg-${project.bgColor}-500 bg-[url('/${project.bgImage}')] bg-no-repeat bg-[length:3rem] bg-center image rounded-md shadow-xl shadow-slate-400/60 dark:shadow-none transition-transform duration-150 hover:scale-105 cursor-pointer overflow-hidden`}
                style={{ backgroundImage: "url('/w2.svg')" }}
            >
                <div
                    className={`absolute w-full h-full p-5 bg-gradient-to-t from-slate-800/30 bg-${project.bgColor}-600 via-transparent to-transparent transition-opacity duration-150 opacity-0 group-hover:opacity-100 pointer-events-none flex flex-col justify-end`}
                >
                    <h5 className="text-2xl text-white font-semibold">
                        {project.title}
                    </h5>
                    <span className="opacity-0 group-hover:opacity-100 text-slate-100">
                        {project.description}
                    </span>
                </div>
            </div>
        </Link>
    )
}

Project.displayName = 'Project'
Project.propTypes = {
    project: propTypes.shape({
        title: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        href: propTypes.string.isRequired,
        bgColor: propTypes.string.isRequired,
        bgImage: propTypes.string.isRequired,
    }),
}

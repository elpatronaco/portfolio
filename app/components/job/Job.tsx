import { classNames } from "@/helpers/classnames"

import type { Experience } from "@/types"

export type JobProps = {
  experience: Experience
  reversed: boolean
}

export function Job({ experience, reversed }: JobProps) {
  return (
    <div
      className={classNames("flex flex-row gap-12", {
        "flex-row-reverse": reversed,
      })}
    >
      <div
        className={classNames("flex flex-col gap-1 w-1/3", {
          "items-end text-right": !reversed,
        })}
      >
        <h3 className="font-semibold text-xl dark:text-white w-fit">
          {experience.company}
        </h3>
        <h4 className="text-lg dark:text-white w-fit">{experience.position}</h4>
        <p className="text-sm text-gray-500 dark:text-white w-fit">
          {experience.date.from} - {experience.date.to}
        </p>
      </div>
      <p className="text-lg text-justify text-gray-500 dark:text-white w-2/3">
        {experience.description}
      </p>
    </div>
  )
}

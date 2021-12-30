import { classNames } from '../../helpers/classnames'

export default function Job({ job, reversed }) {
    return (
        <div
            className={classNames('flex flex-row gap-12', {
                'flex-row-reverse': reversed,
            })}
        >
            <div
                className={classNames('flex flex-col gap-1 w-1/3', {
                    'items-end text-right': !reversed,
                })}
            >
                <h3 className="font-semibold text-xl dark:text-white w-fit">
                    {job.company}
                </h3>
                <h4 className="text-lg dark:text-white w-fit">
                    {job.position}
                </h4>
                <p className="text-sm text-gray-500 dark:text-white w-fit">
                    {job.date}
                </p>
            </div>
            <p className="text-lg text-justify text-gray-500 dark:text-white w-2/3">
                {job.description}
            </p>
        </div>
    )
}

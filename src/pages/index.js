import Meta from '../components/layout/meta/Meta'
import { useMounted } from '../hooks/useMounted'

export default function Home() {
    return (
        <>
            <Meta />
            <div
                className="flex flex-col-reverse gap-8 md:flex-row md:gap-20"
                id="about"
            >
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold dark:text-white">
                        Pau Colomé
                    </h1>
                    <h4 className="text-xl dark:text-white">
                        Frontend Developer
                    </h4>
                    <p className="text-lg text-gray-500 dark:text-gray-200 text-justify">
                        Student and developer with the goal of learning and
                        contributing wherever I go. I am capable of designing
                        maintainable and scalable web applications, and I am
                        always looking for new challenges.
                    </p>
                </div>
                <img
                    src="me.jpeg"
                    className="w-24 h-24 md:w-48 md:h-48 rounded-full aspect-square object-cover"
                />
            </div>
        </>
    )
}

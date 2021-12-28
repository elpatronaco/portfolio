import Meta from '../components/layout/meta/Meta'

export default function NotFound() {
    return (
        <>
            <Meta meta={{ title: 'Not Found' }} />
            <h1 className="text-2xl font-bold">:(</h1>
            <p className="text-lg text-gray-500 mt-5">
                The page you are looking for does not exist.
            </p>
        </>
    )
}

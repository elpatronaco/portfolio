import Footer from './footer/Footer'
import Header from './header/Header'

export default function Layout({ children }) {
    return (
        <main className="sm:px-0 xs:pt-5 md:px-12 lg:px-36 min-w-fit bg-bg-light dark:bg-bg-dark transition-colors duration-200 min-h-screen">
            <Header
                links={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/#about' },
                ]}
            />
            <section className="my-10 mx-5 md:mx-0">{children}</section>
            <Footer
                links={[
                    {
                        label: 'Linkedin',
                        href: 'https://www.linkedin.com/in/paucolome/',
                    },
                    { label: 'Github', href: 'https://github.com/elpatronaco' },
                    { label: 'Example', href: 'google.es' },
                ]}
            />
        </main>
    )
}

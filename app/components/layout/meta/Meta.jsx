import Head from "next/head"
import { useRouter } from "next/router"
import propTypes from "prop-types"

export default function Meta({ meta }) {
  const {
    title = "Pau Colomé - Frontend Developer",
    description = "I have the goal of learning and contributing wherever I go",
  } = meta

  const { asPath: currPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="og:url" content={`https://localhost:3000/${currPath}`} />
    </Head>
  )
}

Meta.propTypes = {
  meta: propTypes.shape({
    title: propTypes.string,
    description: propTypes.string,
  }),
}
Meta.defaultProps = {
  meta: {},
}

import propTypes from 'prop-types'
import Head from 'next/head'

export function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='robots' content='None, noimageindex, nocache, nosnippet, noindex, nofollow' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'F1 Stats - Test App',
  keywords: 'formula 1, statistics, testing app',
  description: 'Stats from the Formula 1 circus',
}

Meta.propTypes = {
  // Title of the page 
  title: propTypes.string,

  // Keywords for the page/site 
  keywords: propTypes.string,

  //page description 
  description: propTypes.string
}
import Head from "next/head";

export const siteTitle = "Dumb Scrumb";
export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/images/ace.jpg" />
        <meta name="description" content="Create your own scrum poker room" />
        <meta property="og:image" content={`/images/ace.jpg`} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro"
        />
      </head>
      <main className="flex flex-col items-center flex-1 px-20 text-center">
        <div className="bg-gray-300 rounded-xl p-5">{children}</div>
      </main>
      <br />
      <footer className="flex items-center justify-center w-full h-24 border-t rounded-xl">
        DTS-STN
      </footer>
    </div>
  );
}

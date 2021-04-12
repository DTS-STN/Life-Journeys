import Head from "next/head";

export const siteTitle = "Life Journeys";
export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <link rel="icon" href="/images/ace.jpg" />
        <meta
          name="og:builddate"
          content={process.env.NEXT_PUBLIC_BUILD_DATE}
        />
        <meta name="og:buildid" content={process.env.NEXT_PUBLIC_TC_BUILD} />
        <meta name="description" content="Create your own scrum poker room" />
        <meta property="og:image" content={`/images/ace.jpg`} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro"
        />
      </Head>

      <main className="flex flex-col items-center flex-1 px-20 text-center">
        <div className="bg-gray-300 rounded-xl p-5">{children}</div>
      </main>

      <br />

      <footer className="flex items-center justify-center w-full h-24 border-t rounded-xl text-black">
        DTS-STN
      </footer>
    </div>
  );
}

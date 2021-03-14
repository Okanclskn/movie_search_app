import Head from "next/head";
import HomePage from "./Home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage></HomePage>
    </div>
  );
}

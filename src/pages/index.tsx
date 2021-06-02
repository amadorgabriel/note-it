import Head from "next/head";
import Header from "../components/Header/Index";
import { Input } from "../components/Input/index"

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Note It</title>
      </Head>

      <Header />

      <div className="main-content">
        {/* <div className="on-dev">
          <h1>Em desenvolvimento..</h1>
          <p>Aguarde logo mais estará disponível</p>
        </div> */}

        <Input placeholder="What is your focus today?" />
      </div>
    </div>
  );
}

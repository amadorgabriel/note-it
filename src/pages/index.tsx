import Head from "next/head";
import Header from "../components/Header/index";
import { Input } from "../components/Input/index"

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Note It</title>
      </Head>

      <Header />

      <div className="main-content">
        <Input placeholder="What is your focus today?" />
      </div>
    </div>
  );
}

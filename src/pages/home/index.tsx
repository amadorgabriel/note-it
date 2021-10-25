import Head from "next/head";
import Header from "../../components/Header";
import { Input } from "../../components/Input"

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <title>Note It</title>s
      </Head>

      <Header />

      <div className="main-content">
        <Input placeholder="What is your focus today?" />
      </div>
    </div>
  );
}

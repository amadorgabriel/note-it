import Head from 'next/head'

export default function Home() {
  return (
    <div className="main-content">
      <Head>
        <title>Note It</title>
      </Head>

      <div className="on-dev">
        <h1>Em desenvolvimento..</h1>
        <p>Aguarde logo mais estará disponível</p>
      </div>
    </div>
  )
}

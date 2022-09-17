import Head from "next/head";
import Header from '../components/Header'
import Hero from '../components/Hero'
import TextInfinite from "../components/TextInfinite";
import Users from "../components/Users";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início - Usuários</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </Head>
      <Header />
      <Hero />
      <TextInfinite />
      <Users />
    </>
  )
}

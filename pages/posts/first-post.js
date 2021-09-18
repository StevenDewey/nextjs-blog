import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'
import profilePic from '/public/images/EllaSleeping.jpg'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>First Post</title>
    </Head>
      <h1>Pedernales Falls</h1>
      <p>After playing in the river all day I was exhausted!</p>
      <Image
            src={profilePic} // Route of the image file
            alt="Your Name"

        />
    </Layout>
  )
}
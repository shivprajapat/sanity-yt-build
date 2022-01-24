import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 border-y py-20 px-10  border-black'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className="underline decoration-black decoration-4">
              Medium</span> is a place to write, read, and connect
          </h1>
          <p>It's easy and free to post your thinking on anny topic and connect with million of readers.</p>
        </div>
        <img className='hidden md:inline-flex h-32'
          src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Medium_svg5-512.png" alt="" />
      </div>
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>

      <h1>The best way to learn is to share your skills</h1>
      <p>Join a large community, learn by sharing what you know and grow your network</p>
      </div>
      <div>
        <Image src='/hero.jpg' width={500} height={500} alt='hello image' />
      </div>
    </main>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenChain Hub',
  description: 'GreenChain Hub connects small businesses with climate tech solutions and blockchain tools to manage their carbon footprint while providing a platform for eco-friendly product sourcing.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenChain Hub</h1>
      <p className="mt-4 text-lg">GreenChain Hub connects small businesses with climate tech solutions and blockchain tools to manage their carbon footprint while providing a platform for eco-friendly product sourcing.</p>
    </main>
  )
}

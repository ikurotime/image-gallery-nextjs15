import { Gif } from '@/types'
import Image from 'next/image'
import SearchForm from './(feature)/components/SearchForm'

export default async function Home() {
  const res = await fetch(process.env.BACKEND_URL + '/api/home')
  const { data } = await res.json()

  return (
    <div className='flex flex-col min-h-dvh '>
      <div className='flex flex-col container flex-1 mx-auto py-4 gap-4'>
        <SearchForm />
        <div className='grid grid-cols-4 gap-4'>
          {data.map((n: Gif) => (
            <Image
              key={n.id}
              alt={n.alt_text}
              src={n.images.original.url}
              className='w-full h-full object-cover'
              width='100'
              height='100'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

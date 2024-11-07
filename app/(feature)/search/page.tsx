import { Gif } from '@/types'
import Image from 'next/image'
import SearchForm from '../components/SearchForm'

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const query = (await searchParams).query
  const res = await fetch(`http://localhost:3000/api/search?query=${query}`)
  const { data } = await res.json()
  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-col container h-full mx-auto'>
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

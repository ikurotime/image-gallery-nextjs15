import Form from 'next/form'
export default function SearchForm() {
  return (
    <Form action='/search' className='flex'>
      <input
        name='query'
        className='p-5 rounded-l bg-white-900 w-full text-black text-2xl'
        type='text'
      />
      <button className='px-4 py-2 rounded-r bg-zinc-900  text-2xl'>
        search
      </button>
    </Form>
  )
}

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center flex-col w-full text-center py-3 '>
      <h2>Sorry Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='text-blue hover:underline text-lg' href="/">Return Home</Link>
    </div>
  )
}
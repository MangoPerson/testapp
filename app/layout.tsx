/* eslint-disable @next/next/no-head-element */

import Link from 'next/link';
import '../styles/globals.css';

export default function RootLayout({ children, }:{ children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className='bg-neutral-900'>
        <div className='bg-zinc-800 w-full h-20 p-3 rounded flex items-end shadow-xl'>
          <Link href='/' className='text-white p-2 m-2 rounded-lg align-middle bg-stone-600 shadow-lg hover:bg-stone-500 transition-all'>
            Home
          </Link>
        </div>
        <div className='px-24 py-2 text-neutral-300'>
          {children}
        </div>
      </body>
    </html>
  );
}
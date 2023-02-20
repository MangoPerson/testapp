/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import '../styles/globals.css';
import Button from '@/components/input/button';

export default function RootLayout({ children, }:{ children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body className='bg-neutral-900'>
        <div className='bg-zinc-800 w-full h-20 p-3 rounded flex items-end shadow-xl'>
          <Link href='/'>
            <Button>Home</Button>
          </Link>
        </div>
        <div className='px-24 py-2 text-neutral-300'>
          {children}
        </div>
      </body>
    </html>
  );
}
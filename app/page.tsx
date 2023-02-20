import Link from 'next/link'
import Title from '@/components/text/title'

export default function Home() {
    return (
        <>
            <Title>Home Page</Title>
            <div className='text-sky-300'>
                <Link href="/learn">
                    <p>Learn</p>
                </Link>
                <Link href="/review">
                    <p>Review</p>
                </Link>
                <Link href="/add">
                    <p>Add Words</p>
                </Link>
                <Link href="/dostuff">
                    <p>Do Stuff</p>
                </Link>
            </div>
        </>
    )
}
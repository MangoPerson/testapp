import Link from 'next/link'
import Title from '@/components/pagetitle'

export default function Home() {
    return (
        <>
            <div>
                <Title>Home Page</Title>
                <Link href="/review" className="text-sky-300">Reviews</Link>
            </div>
        </>
        
    )
}
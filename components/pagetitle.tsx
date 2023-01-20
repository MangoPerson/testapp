import Head from "next/head";

export default function Title({ children } : any) {
    return (
        <>
            <Head>
                {children}
            </Head>
            <div className="align-middle text-neutral-300 font-bold font-2 text-8xl text-center p-4">
                <h1>{children}</h1>
            </div>
        </>
    )
}
import Button from "@/components/input/button";
import Title from "@/components/text/title";

export default function Learn() {


    
    function final(sub: JSX.Element) {
        return (
            <>
                <Title>Learn Kanji & Vocab</Title>
                <div className="grid max-w-2xl content-center m-auto">
                    {sub}
                </div>
            </>
        )
    }

    return final(<></>);
}
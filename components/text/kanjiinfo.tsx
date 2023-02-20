import { Kanji } from "../functions"

export function KanjiInfo( { children }: { children?: Kanji} ) {
    if (children) {
        return (
            <div className="infobox">
                <h1>{children.kanji}</h1>
                <h3>On'Yomi Readings</h3>
                {children.onyomi.map(s => <p>\t{s}</p>)}
                <h3>Kun'Yomi Readings</h3>
                {children.kunyomi.map(s => <p>\t{s}</p>)}
                <h3>Meanings</h3>
                {children.meanings.map(s => <p>\t{s}</p>)}
            </div>
        )
    }
    else {
        return <KanjiInfo>{{
            id: "",
            kanji: "",
            onyomi: [],
            kunyomi: [],
            meanings: []
        }}</KanjiInfo>
    }
}
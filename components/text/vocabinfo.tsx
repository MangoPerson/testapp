import { Vocab } from "../functions"

export function VocabInfo( { children }: { children?: Vocab } ) {
	if (children) {
		return (
			<div className="infobox">
				<h1 className="text-4xl">{children.term}</h1>
				<h2>{children.part}</h2>
				<h2>Readings</h2>
				{children.readings.map(s => <p>\t{s}</p>)}
				<h2>Meanings</h2>
                {children.meanings.map(s => <p>\t{s}</p>)}
			</div>
		)
	}
}

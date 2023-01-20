'use client';

import { useState } from "react";
import Title from "@/components/pagetitle";

export default function AddWord() {
    const [word, setWord] = useState('');
    const [reading, setReading] = useState('');
    const [meaning, setMeaning] = useState('');
    const [part, setPart] = useState('');


    return (
        <form>
            <h3>Add a new Word</h3>
            <input
                type='text'
                placeholder='Word'
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
        </form>
    )
}
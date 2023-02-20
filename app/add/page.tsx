'use client';
import Title from "@/components/text/title";
import TextBox from "@/components/input/textbox";
import Form from "@/components/input/form";
import { FormData, pb } from '@/components/functions';

export default function AddWord() {

    let fd = new FormData();

    async function addWord(e: any) {
        e.preventDefault();

        console.log(fd.term)
    }

    return (
        <>
            <Title>Add a New Word</Title>
            <Form data={fd} buttonText='Add Word' action={addWord}>
                <TextBox id='term'>Term</TextBox>
                <TextBox id='reading'>Reading</TextBox>
                <TextBox id='meaning'>Meaning</TextBox>
                <TextBox id='part'>Part of Speech</TextBox>
            </Form>
        </>
    )
}
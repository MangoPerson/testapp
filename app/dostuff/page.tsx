'use client'
import Title from "@/components/text/title";
import TextBox from "@/components/input/textbox";
import Form from "@/components/input/form";

import { FormData } from '../../components/functions';

export default function DoStuff() {

    let fd = new FormData();

    function dostuff(e: any) {
        e.preventDefault();

        console.log(fd.stuff)
    }

    return (
        <>
            <Title>The Do Stuff Page</Title>
            <Form data={fd} buttonText='Do Stuff' action={dostuff}>
                <TextBox id='stuff'>Term</TextBox>
                <TextBox id='more'>Other</TextBox>
            </Form>
        </>
    )
}
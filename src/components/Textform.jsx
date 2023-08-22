import React, { useState, useEffect } from 'react'
import '../App.css'

export default function Textform(props) {
    const [text, setText] = useState("");
    const [newText, setnewText] = useState("");
    // word count
    const [wordCount, setWordCount] = useState(0);

    const width = {
        width: "50%"
    }

    const onChange = (event) => {
        setText(event.target.value)
        setnewText(event.target.value)
    }
    const upCase = () => {
        let upText = text.toUpperCase();
        setnewText(upText)
    }
    const lwCase = () => {
        let lwText = text.toLowerCase();
        setnewText(lwText)
    }
    const clear = () => {
        if (text.trim() != "") {
            let a = confirm("This will delete all text")
            if (a) {
                setText("")
                setnewText("")
            }
        }
        else
            alert("Enter some text first")
    }
    const copy = () => {
        navigator.clipboard.writeText(newText)
    }
    const trim = () => {
        setnewText(newText.trim())
    }
    const extraSpaces = () => {
        let spaces = text.split(/[ ]+/)
        setnewText(spaces.join(" "))
    }


    useEffect(() => {
        // array of words
        const words = text.split(' ');

        // update word count
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);

    }, [text]);

    return (
        <div className='container flex my-3'>
            <div className="mx-1" style={width}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea placeholder='Enter some text' value={text} onChange={onChange} className="form-control" id="exampleFormControlTextarea1" rows="25"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={upCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={lwCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={extraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-2" onClick={trim}>Trim Spaces</button>
                <button className="btn btn-primary mx-1 my-2" onClick={clear}>Clear</button>
                <button className="btn btn-primary mx-1 my-2" onClick={copy}>Copy</button>
            </div>
            <div className="mx-1" style={width}>
                <h1 className='mx-3'>Preview Your Text</h1>
                <div className='mb-3'>
                    <textarea disabled className='form-control' id="exampleFormControlTextarea1" rows="25" value={newText.length > 0 ? newText : "Enter above to preview it here"}></textarea>
                </div>
                <p className='mx-2'>{wordCount} Words &#9679; {text.length} Characters</p>
            </div>
        </div>
    )
}

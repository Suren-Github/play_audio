import React, { useState, useEffect } from 'react';

export function Audio(props) {
    // Declare a new state variable, which we'll call "count"
    // const [audioUrl, setAudioUrl] = useState('');

    // useEffect(() => {
    //     console.log("Entered useEffect()");
    // });


    return (

        <div>
            {props.src}
            <figure>
                <figcaption>Listen to the song:</figcaption>
                <audio controls src={props.src} controlsList={!props.dwnld && 'nodownload'}>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </figure>
        </div>
    );
}
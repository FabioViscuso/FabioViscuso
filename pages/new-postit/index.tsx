import { useRouter } from 'next/router';
import React, { useRef } from 'react';

export default function NewPostitForm() {
    const router = useRouter()

    const titleInputRef = useRef<HTMLInputElement>(null);
    const creatorInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const title = titleInputRef.current?.value;
        const creator = creatorInputRef.current?.value;
        const date = dateInputRef.current?.value;
        const content = descriptionInputRef.current?.value;

        const postitData = {
            creator: creator,
            title: title,
            date: date,
            content: content,
        };

        const response = await fetch('/api/new-postit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postitData)
        })

        if (response.ok) {
            router.push('/')
            console.log('request went ok')
        } else {
            window.alert('Something went wrong, try again')
            console.log('something went wrong with the request')
        }
    }

    return (
        <div>
            <form className='' onSubmit={submitHandler}>
                <div className=''>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                </div>
                <div className=''>
                    <label htmlFor='image'>Creator</label>
                    <input type='url' required id='image' ref={creatorInputRef} />
                </div>
                <div className=''>
                    <label htmlFor='address'>Date</label>
                    <input type='text' required id='address' ref={dateInputRef} />
                </div>
                <div className=''>
                    <label htmlFor='description'>Content</label>
                    <textarea
                        id='description'
                        required
                        rows={5}
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className=''>
                    <button type='submit'>Add Post-it</button>
                </div>
            </form>
        </div>
    );
}

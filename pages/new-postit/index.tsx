import { useRouter } from 'next/router';
import React, { useRef } from 'react';

export default function NewPostitForm() {
    const router = useRouter()

    const titleInputRef = useRef<HTMLInputElement>(null);
    const creatorInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);
    const contentInputRef = useRef<HTMLTextAreaElement>(null);

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const title = titleInputRef.current?.value;
        const creator = creatorInputRef.current?.value;
        const date = dateInputRef.current?.value;
        const content = contentInputRef.current?.value;

        if (title.length === 0 || creator.length === 0 || date.length === 0 || content.length === 0) {
            window.alert('Ops! You forgot to fill some field!')
        } else {

            const postitData = {
                creator: creator,
                title: title,
                date: date,
                content: content,
            };
            const response = await fetch('/api/add-postit', {
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
    }

    return (
        <div className='h-full flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-4xl'>Add another post-it to the board!</h1>
            <form className='flex flex-col gap-5 justify-between items-center' onSubmit={submitHandler}>
                <div className='flex flex-col gap-2'>
                    <label
                        className='text-xl'
                        htmlFor='title'>
                        Title
                    </label>
                    <input
                        type='text'
                        required
                        id='title'
                        ref={titleInputRef}
                        className='rounded-md text-slate-900 p-2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label
                        className='text-xl'
                        htmlFor='title'>
                        Creator
                    </label>
                    <input
                        type='text'
                        required id='image'
                        ref={creatorInputRef}
                        className='rounded-md text-slate-900 p-2'

                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label
                        className='text-xl'
                        htmlFor='address'>
                        Date
                    </label>
                    <input
                        type='text'
                        required
                        id='address'
                        ref={dateInputRef}
                        className='rounded-md text-slate-900 p-2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label
                        className='text-xl'
                        htmlFor='description'>
                        Content
                    </label>
                    <textarea
                        id='description'
                        required
                        rows={5}
                        ref={contentInputRef}
                        className='rounded-md text-slate-900 p-2'
                    ></textarea>
                </div>
                <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-50">Add post-it</button>
            </form>
        </div>
    );
}

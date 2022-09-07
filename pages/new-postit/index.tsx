import { useRouter } from 'next/router';
import React, { useReducer } from 'react';

export default function NewPostitForm() {
    const router = useRouter()

    interface Action {
        type: string,
        inputField: string,
        payload: string
    }

    interface FormState {
        title: string,
        creator: string,
        date: string,
        description: string,
        colorSelect: string,
    }

    const formReducer = (state: FormState, action: Action) => {
        switch (action.type) {
            case 'CHANGE@TEXTINPUTS': return { ...state, [action.inputField]: action.payload };
            default: return state;
        }
    }

    const initialState = {
        title: '',
        creator: '',
        date: '',
        description: '',
        colorSelect: '',
    }
    const [formData, dispatch] = useReducer(formReducer, initialState)

    const inputChangeHandler = (event) => {
        dispatch({
            type: 'CHANGE@TEXTINPUTS',
            inputField: event.target.name,
            payload: event.target.value
        })
    }


    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const postitData = {
            creator: formData.creator,
            title: formData.title,
            date: formData.date,
            content: formData.description,
            color: formData.colorSelect
        };
        const response = await fetch('/api/add-postit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postitData)
        })

        if (response.ok) {
            router.push('/board')
        } else {
            window.alert('Something went wrong, try again')
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
                        name='title'
                        id='title'
                        onChange={(e) => inputChangeHandler(e)}
                        className='rounded-md text-slate-900 p-2'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label
                        className='text-xl'
                        htmlFor='creator'>
                        Creator
                    </label>
                    <input
                        type='text'
                        required
                        name='creator'
                        id='creator'
                        onChange={(e) => inputChangeHandler(e)}
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
                        name='date'
                        id='date'
                        onChange={(e) => inputChangeHandler(e)}
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
                        name='description'
                        id='description'
                        required
                        rows={5}
                        onChange={(e) => inputChangeHandler(e)}
                        className='rounded-md text-slate-900 p-2 w-full'
                    ></textarea>
                </div>
                <fieldset onChange={(e) => inputChangeHandler(e)} className='flex flex-wrap gap-2 h-10'>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="option1" className='w-6 h-6 rounded-full bg-[#74f9e5]'></label>
                        <input type="radio" name="colorSelect" id="option1" value={'#74f9e5'} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="option2" className='w-6 h-6 rounded-full bg-[#f9f474]'></label>
                        <input type="radio" name="colorSelect" id="option2" value={'#f9f474'} defaultChecked={true} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="option3" className='w-6 h-6 rounded-full bg-[#f974e1]'></label>
                        <input type="radio" name="colorSelect" id="option3" value={'#f974e1'} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="option4" className='w-6 h-6 rounded-full bg-[#dfded2]'></label>
                        <input type="radio" name="colorSelect" id="option4" value={'#dfded2'} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="option5" className='w-6  h-6 rounded-full bg-[#f97474]'></label>
                        <input type="radio" name="colorSelect" id="option5" value={'#f97474'} />
                    </div>
                </fieldset>
                <button className="text-lg bg-gradient-to-bl from-teal-400 to-emerald-400 px-4 py-2 rounded-lg text-gray-50">Add post-it</button>
            </form>
        </div>
    );
}

import React from 'react'
import Input from './Input'
import TextArea from './Text'
import Button from './Button'
import SendIcon from '@/assets/icons/SendIcon'

const Form = () => {
    return (
        <form className='flex flex-col gap-[32px] w-full min-[1000px]:w-1/2 min-[1440px]:w-[600px] bg-white rounded-[24px] p-[32px]'>
            <h1 className='font-inter text-xl md:text-2xl font-bold'>Connect with Comfort Dev</h1>
            <div className='flex flex-col gap-[18px]'>
                <div className='flex max-md:flex-col gap-[18px] w-full'>
                    <Input placeholder='First Name*' className='w-full' />
                    <Input placeholder='Last Name*' className='w-full' />
                </div>
                <Input placeholder='Email Address*' className='w-full' />
                <Input placeholder='Phone Number (optional)' className='w-full' />
                <Input placeholder='Company/Organization (optional)' className='w-full' />
                <TextArea placeholder='Message*' className='w-full' />
            </div>
            <Button variant='secondary' className='w-full max-md:text-base!' icon={<SendIcon />}>Send Message</Button>
        </form>
    )
}

export default Form
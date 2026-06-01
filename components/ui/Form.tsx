'use client'

import React, { useState } from 'react'
import Input from './Input'
import TextArea from './Text'
import Button from './Button'
import SendIcon from '@/assets/icons/SendIcon'

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
}

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!data.firstName.trim()) errors.firstName = 'First name is required.'
  if (!data.lastName.trim()) errors.lastName = 'Last name is required.'
  if (!data.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.'
  if (!data.message.trim()) errors.message = 'Message is required.'
  return errors
}

const Form = () => {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(initialState)
    } catch {
      setServerError('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className='flex flex-col gap-[16px] w-full min-[1000px]:w-[600px] bg-white rounded-[24px] p-[32px] items-center justify-center text-center min-h-[300px]'>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#E6F7FF" />
          <path d="M14 24L21 31L34 17" stroke="#29B3FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className='font-inter text-xl md:text-2xl font-bold'>Message sent!</h2>
        <p className='font-poppins text-sm md:text-base text-[#525252]'>
          We&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className='font-poppins text-sm text-[#29B3FF] underline mt-2 cursor-pointer'
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-[32px] w-full min-[1000px]:w-[600px] bg-white rounded-[24px] p-[32px]'
    >
      <h1 className='font-inter text-xl md:text-2xl font-bold'>Connect with Comfort Dev</h1>
      <div className='flex flex-col gap-[18px]'>
        <div className='flex max-md:flex-col gap-[18px] w-full'>
          <Input
            placeholder='First Name*'
            className='w-full'
            value={form.firstName}
            onChange={handleChange('firstName')}
            error={errors.firstName}
          />
          <Input
            placeholder='Last Name*'
            className='w-full'
            value={form.lastName}
            onChange={handleChange('lastName')}
            error={errors.lastName}
          />
        </div>
        <Input
          placeholder='Email Address*'
          className='w-full'
          type='email'
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
        />
        <Input
          placeholder='Phone Number (optional)'
          className='w-full'
          value={form.phone}
          onChange={handleChange('phone')}
        />
        <Input
          placeholder='Company/Organization (optional)'
          className='w-full'
          value={form.company}
          onChange={handleChange('company')}
        />
        <TextArea
          placeholder='Message*'
          className='w-full'
          value={form.message}
          onChange={handleChange('message')}
          error={errors.message}
        />
      </div>
      {serverError && (
        <p className='font-poppins italic text-[#D7282F] text-[14px] -mt-4'>{serverError}</p>
      )}
      <Button
        type='submit'
        variant='secondary'
        className='w-full max-md:text-base!'
        icon={status !== 'loading' ? <SendIcon /> : undefined}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

export default Form

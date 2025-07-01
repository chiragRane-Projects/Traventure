"use client"

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { MapPin } from 'lucide-react'

const SearchBar = () => {
  return (
    <>
      <Card className={'w-full md:w-[990px] p-5 border-2 border-zinc-200'}>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-500 font-light'>Your Location</p>
          <Input type="text" placeholder="Ex: Bali, Indonesia" className="w-[950px] border-white shadow-md" />
        </div>

        <div className='flex flex-row gap-7'>
          <div className='flex flex-col'>
            <p className='text-gray-500 font-light'>Destination</p>
            <Input type="text" placeholder="Ex: Bali, Indonesia" className="w-[200px] border-white shadow-md rounded-2xl" />
          </div>

          <div className='flex flex-col'>
            <p className='text-gray-500 font-light'>Check-In</p>
            <Input type="date" className="w-[200px] border-white shadow-md rounded-2xl" />
          </div>

          <div className='flex flex-col'>
            <p className='text-gray-500 font-light'>Check-Out</p>
            <Input type="date" className="w-[200px] border-white shadow-md rounded-2xl" />
          </div>

          <div className='flex flex-col'>
            <p className='text-gray-500 font-light'>Guest</p>
            <Input type="text" className="w-[120px] border-white shadow-md rounded-2xl" placeholder="1 person"/>
          </div>

          <div className='mt-6'>
          <Button className="bg-rose-500 hover:bg-rose-600 duration-300 transition-colors cursor-pointer rounded-2xl text-md">
            Search Tours
          </Button>
          </div>
        </div>

      </Card>
    </>

  )
}

export default SearchBar
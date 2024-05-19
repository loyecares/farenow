import React, { FC } from 'react'

export type cardProps = {
  heading: string;
  icon: React.ElementType;
  active: string;
  description:string,
  invite:string,
  inviteName:string,
 
};

const Card: FC<cardProps>=({heading,active,description,invite,icon:Icon,inviteName})=> {
  return (
    <div className='px-3 py-4 border rounded border-special w-[330px] h-[179px] flex flex-col justify-between'>
      <div className='flex gap-4'>
        <div>
          {<Icon/>}
        </div>
        <div>
          <div className='text-grey text-sm mb-0 flex gap-1 items-center'>
             
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="#00FF38"/> </svg>

              {active}
          </div>
          <p className='font-bold text-xl mt-[-5px]' >{heading}</p>
          <p className='text-grey text-sm mt-1 leading-4'>{description}</p>
        </div>

      </div>
      <p className=' text-base'>{invite} <b>{inviteName}</b></p>

    </div>
  )
}

export default Card
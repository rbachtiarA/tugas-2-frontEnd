import getEmployees from '@/components/employee';
import EmployeeCard from '@/components/employeeCard';
import { log } from 'console';
import { Montserrat, Roboto } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const fieldTeam = [
  'Marketing',
  'Research & Development',
  'Production',
  'Warehouse'
]

const kanit = Montserrat({
  weight: '900',
  subsets: ['latin']
})

const roboto = Roboto({
  weight: '900',
  subsets: ['latin']
})

export default async function Page() {

  const data = await getEmployees()
  
  return (
    <section className=''>
        <div className={`${kanit.className} text-center pt-8`} > 
          <p className='text-5xl'>Meet our hardworker team</p>
          <p className='font-light'>Who makes our company always reliable</p>
        </div>

        <div className='flex flex-col w-full mx-auto p-4'>
          {fieldTeam.map((field: string, idx: number):any => {
                return (
                  <div key={field} id={field} className='flex flex-col'>
                    <strong className={`${roboto.className} text-3xl text-center mb-4 mt-8`}>{field}</strong>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10'>
                      {data.results.slice(4*idx, (idx+1)*4).map((employee: any) => (
                        <EmployeeCard 
                        key={null}
                        id={employee.login.id}
                        name={`${employee.name.first} ${employee.name.last}`}
                        picture={employee.picture.large}
                        country={employee.location.country}
                        />
                      ))}
                    </div>
                  </div>
                )  
              })}                       
        </div>
        
    </section >
  )
}

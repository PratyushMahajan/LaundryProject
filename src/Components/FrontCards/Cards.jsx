import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { AiFillSchedule } from "react-icons/ai";
import CardsSec from './CardsSec';
import CardsThird from './CardsThird';

const Cards = () => {
  return (
    <>
    <div className='ml-8 mt-12 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-gray-200'>
     <Card className="w-full max-w-[58rem] flex-row ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://t3.ftcdn.net/jpg/06/81/26/90/360_F_681269043_IPTzItGqLolggMXPn8RR5ul3U3mSfuSB.jpg"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        {/* <Typography variant="h6" color="gray" className="mb-4 uppercase"> 
          startups
        </Typography>*/}
        <Typography variant="h2" color="blue-gray" className="mb-8">
      
          WASH AND FOLD
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2">
          <AiFillSchedule />
          <span>Schedule a pickup</span>
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
        You can schedule a pickup any day of the week. Your Valet will arrive with your free, personalized Rinse bags between 8pm and 10pm to pick up your clothes.
        </Typography>
        {/* second */}
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2">
          <AiFillSchedule />
          <span>Professional cleaning care</span>
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
        Lights and darks are separated and washed in cold water. Hypoallergenic detergent and fabric softener are free upon request
        </Typography>
        {/* thireds */}
        <Typography variant="h4" color="blue-gray" className="mb-6 flex items-center space-x-2">
  <AiFillSchedule />
  <span>Ready to wear
  </span>
</Typography>
        <Typography color="gray" className="mb-8 font-normal">
        Your clothes are delivered to your door, crisply folded and your socks paired, ready to be worn or put into drawers.        </Typography> 


        {/* <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a> */}
      </CardBody>
    </Card>

    </div>

      <div className='flex justify-end mr-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-gray-200'>
        <CardsSec/>

      </div>

      {/*<div className='ml-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-gray-200'>
        <CardsThird />

      </div>*/}


      
    </>
  )
}

export default Cards

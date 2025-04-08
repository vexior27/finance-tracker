import { Button, Card, Group, Text, Badge, TextInput, Title, ActionIcon, Modal, Divider, Box } from "@mantine/core"
import React, { useEffect, useState } from "react"

import { IconTrash, IconCirclePlusFilled } from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';

export default function Trips() {

   const [opened, { open, close }] = useDisclosure(false);

   const [trips, setTrips] = useState([
      {destination: "Kraków", budget: 1000, date: '2025-04-05'}
   ])

   const [costOfTrips, setCostOfTrips] = useState(0);

   const [id, setId] = useState(0);
   const [newTrip, setNewTrip] = useState({ destination: '', budget: '', date: ''});

   const addNewTrip = () => {
      if(!newTrip.destination || !newTrip.budget || !newTrip.date) return;
      setTrips((prev) => [...prev, { ...newTrip, id: Date.now()}])
      setNewTrip({ destination: '', budget: '', date: '' });
   }

   const deleteTrip = (id) => {
      setTrips(trips.filter(el => el.id !== id))
      setId(0)
   }

   useEffect(() => {
      let cost = 0;
      trips.forEach((trip) => {
         cost += Number(trip.budget)
      })
      setCostOfTrips(cost);
   }, [trips])

   return (
      <div className="trips w-5/6 h-screen bg-white flex flex-col gap-4 p-3 ">
         <Modal opened={opened} onClose={close} title="Delete" centered ff='Inter'>
            <Text>Are you sure you want to continue this action?</Text>
            <Button mt={10} color="red" onClick={() => (close(), deleteTrip(id))}>Delete</Button>
         </Modal>
         <Title c='blue' ff='Inter' ml='md' mt='md'>Your trips</Title>
         <div className="w-full h-1/5 text-white bg-blue-500 rounded-md flex flex-col gap-0 items-end justify-end p-10">
            <Title ff='Inter' ml='md' mt='md' order={1}>{costOfTrips} PLN</Title>
         </div>
         <div className="trips-form w-full min-h-1/6  p-3 flex flex-col gap-4">
         <Group grow >
            <TextInput 
               type="text"
               label="Destination"
               value={newTrip.destination}
               onChange={(e) => setNewTrip({...newTrip, destination: e.target.value})}
               placeholder="Destination of you trip"
            />
            <TextInput 
               type="number"
               label='Cost'
               value={newTrip.budget}
               onChange={(e) => setNewTrip({...newTrip, budget: e.target.value})}
               placeholder="Cost of your trip ( PLN )"
            />
            <TextInput 
               type="date"
               value={newTrip.date}
               onChange={(e) => setNewTrip({...newTrip, date: e.target.value})}
               label='Date'
            />
         </Group>
         <Button size='md' onClick={() => addNewTrip()} rightSection={<IconCirclePlusFilled size={20}/>}>Add</Button>
         </div>
         <Divider mb='lg'/>
         <div className="trips-display grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
               trips.map((trip) => (
                  <Card padding="lg" radius="md" withBorder>
                        <Group justify="space-between" mb='xs'>
                           <Text fw={500}>{trip.destination}</Text>
                           <Badge color="green">{trip.budget} PLN</Badge>
                        </Group>
                        <Text size="sm" c="dimmed" mb='xs'>
                           Date: {trip.date} 
                        </Text>
                        <ActionIcon color="red" variant="light" onClick={() => (open(), setId(trip.id))}>
                           <IconTrash size={16}/>
                        </ActionIcon>
                  </Card>
               ))
            }
         </div>
      </div>
   )
}
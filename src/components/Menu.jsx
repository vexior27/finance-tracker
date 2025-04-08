import { Avatar, Text, Button, Input, Card, Title, Flex } from '@mantine/core';
import { IconChartBar, IconPlane, IconCreditCardFilled, IconCirclePlusFilled, IconHome } from '@tabler/icons-react';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Menu() {

   const [categories, setCategories] = useState([]);
   const [newCategory, setNewCategory] = useState('');
   const [isAdding, setIsAdding] = useState(false);

   const [activePage, setActivePage] = useState('overview');

   const addNewCategory = () => {
      if (newCategory === '') return;
      setCategories((prev) => [...prev, newCategory]);
      setNewCategory('')
      setIsAdding(false)
   }

   return (
      <div className='menu w-1/6 h-screen border-r-1 border-gray-200 flex flex-col gap-4 p-3 bg-white'>
         <div className='menu-avatar-section w-full h-1/6  flex items-center justify-end flex-col gap-2'>
            <Avatar
               size='lg'
               src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsX29mZmljZV8zMF9waG90b19vZl9tYW5faW5kaWFuX2FybXNfY3Jvc3NlZF9zZWxmLWNvbmZpZF8wMDgwMDBlNS00YjdiLTQ1N2UtYjA3Mi02NGMwOGIwMWQ2ZmEucG5n.png" alt="it's me" />
            <Text size="s" fw={500}>Rafał Krupa</Text>
         </div>
         <div className='menu-category-section flex flex-col gap-2 items-center justify-start'>
            <Button
               size='md'
               component={Link}
               to='/overview'
               variant={
                  activePage === 'overview' ? 'filled' : 'default'
               }
               fullWidth
               leftSection={<IconChartBar size={20} />}
               onClick={() => setActivePage('overview')}
            >
               Overview
            </Button>
            <Button
               component={Link}
               to='/home'
               size='md'
               fullWidth
               variant={
                  activePage === 'home' ? 'filled' : 'default'
               }
               onClick={() => setActivePage('home')}
               leftSection={<IconHome size={20} />}
            >
               Home
            </Button>
            <Button
               size='md'
               component={Link}
               to='/expenses'
               variant={
                  activePage === 'expenses' ? 'filled' : 'default'
               }
               fullWidth
               onClick={() => setActivePage('expenses')}
               leftSection={<IconCreditCardFilled size={20} />}
            >
               Expenses
            </Button>
            <Button
               component={Link}
               to='/trips'
               size='md'
               variant={
                  activePage === 'trips' ? 'filled' : 'default'
               }
               fullWidth
               onClick={() => setActivePage('trips')}
               leftSection={<IconPlane size={20} />}
            >
               Trips
            </Button>
         </div>
         <Text size="xs" fw={500} c='dimmed'>Add category</Text>
         <div className='menu-add-category-section flex flex-col gap-2 items-center justify-start'>
            {
               categories.map((cat) => (
                  <Button size='md' variant='default' fullWidth>{cat}</Button>
               ))
            }
            {
               isAdding ? (
                  <div className='flex flex-row gap-2'>
                     <Input size="md" placeholder="Type here" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
                     <Button size='md' onClick={() => addNewCategory()}>
                        Add
                     </Button>
                  </div>
               ) : (
                  <Button size='md' fullWidth rightSection={<IconCirclePlusFilled size={20} />} onClick={() => setIsAdding(true)}>Add new category</Button>
               )
            }
         </div>
      </div>
   )
}
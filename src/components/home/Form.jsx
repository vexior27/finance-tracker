import { Button, Card, Text, SimpleGrid, Title, ActionIcon, Modal, NumberInput, TextInput, Flex, } from "@mantine/core"
import { IconPizza, IconShoppingCart, IconBallBowling, IconPlus, IconBulbFilled } from '@tabler/icons-react';
import { useEffect, useState } from "react";

export default function Form() {

   const icons = [ <IconPizza/>, <IconShoppingCart/>, <IconBallBowling/>, <IconPlus/>, <IconBulbFilled/>, <IconPlus/>, <IconBulbFilled/>, <IconPlus/>, <IconBulbFilled/>]

   const [selectedIcon, setSelectedIcon] = useState()

   useEffect(() => {
      console.log(selectedIcon);
   })

   return (
      <div className="flex flex-col gap-3">
         <TextInput label='Title' placeholder="Type your title here"/>
         <TextInput type="number" label='Cost' placeholder="Cost of your expense ( PLN )" />
         <Text>Select icon</Text>
         <Card withBorder>
            <SimpleGrid cols={6} spacing='md'>
               {
                  icons.map((el, key) => (
                     <ActionIcon size='xl' variant={selectedIcon === key ? 'light' : 'filled'} onClick={() => setSelectedIcon(key)}>
                        {el}
                     </ActionIcon>
                  ))
               }
            </SimpleGrid>
         </Card>
      </div>
   )
}  
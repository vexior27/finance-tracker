import { Button, Card, Group, Text, Badge, TextInput, Title, ActionIcon, Modal, Divider, Box, Flex, Avatar } from "@mantine/core"
import React, { useState } from "react"

import { LatestExpensesContext } from "./home/context/LatestExpensesContext";

import { IconPizza, IconShoppingCart, IconBallBowling } from '@tabler/icons-react';
import ExpensesCard from "./home/ExpensesCard";

export default function Home() {

   const [latestExpenses, setLatestExpenses] = useState([
      {img: <IconPizza/>, title: "Pizza", cost: 30, type: 'plus', date: '2025-04-08'},
      {img: <IconShoppingCart/>, title: "Groceries", cost: 50, type: 'plus', date: '2025-04-08'},
      {img: <IconBallBowling/>, title: "Bowling", cost: 50, type: 'plus', date: '2025-04-07'}
   ])

   const getFormattedDate = (daysAgo = 0) => {
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
    
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // miesiące zaczynają się od 0!
      const day = String(date.getDate()).padStart(2, '0');
    
      return `${year}-${month}-${day}`;
    };
    
    const today = getFormattedDate(0);
    const yesterday = getFormattedDate(1);
    const twoDaysAgo = getFormattedDate(2);

   return (
      <LatestExpensesContext.Provider value={latestExpenses}>
         <div className="home w-5/6 h-screen bg-white flex flex-col gap-4 p-3 ">
         <Title c='blue' ff='Inter' ml='md' mt='md'>
            Your household expenses
         </Title>
         <div className="home-section-container w-full h-full flex">
            <div className="home-left-section w-1/3 h-full p-3 flex flex-col gap-4">
               <Card bg='blue' h={150}>
                  <Flex
                     h={150}
                     gap="xs"
                     justify="flex-end"
                     align="flex-end"
                     direction="column"
                     wrap="wrap"
                  >
                     <Title c='white' ff='Inter' order={5}>
                        This month
                     </Title>
                     <Title c='white' ff='Inter'>
                        500 PLN
                     </Title>
                  </Flex>
               </Card>
               <Text size="xs" fw={500} c='dimmed'>Latest expenses</Text>
               <Text  fw={500} >Today</Text>
               <div className="home-today-expenses flex flex-col gap-3">
                  {
                     latestExpenses.map((exp, index) => {
                        if(exp.date === today) return <ExpensesCard key={index} expense={exp} />
                     }
                   )
                  }
               </div>
               <Divider/>
               <Text  fw={500} >Yesterday</Text>
               <div className="home-yesterday-expenses flex flex-col max-h-1/4">
               {
                     latestExpenses.map((exp, index) => {
                        if(exp.date === yesterday) return <ExpensesCard key={index} expense={exp} />
                     }
                   )
               }
               </div>
               <Divider />
               <Text  fw={500} >2 days ago</Text>
               <div className="home-yesterday-expenses flex flex-col">
               {
                     latestExpenses.map((exp, index) => {
                        if(exp.date === twoDaysAgo) return <ExpensesCard key={index} expense={exp} />
                     }
                   )
               }
               </div>
            </div>
            <div className="home-left-section w-2/3 h-full bg-orange-500">
               
            </div>
         </div>
      </div>
      </LatestExpensesContext.Provider>
   )
}
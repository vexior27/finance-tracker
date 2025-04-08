import { Card, Flex, Avatar, Text, Title } from "@mantine/core"
import { IconPizza, IconShoppingCart, IconBallBowling } from '@tabler/icons-react'

export default function ExpensesCard({ expense }) {
   return (
      <Card withBorder>
         <Flex align='center'>
            <div className="card-image-section">
               <Avatar color="blue" radius="md">
                  {expense.img}
               </Avatar>
            </div>
            <div className="card-info-section w-full flex flex-row justify-between ml-5">
               <Text>{expense.title}</Text>
               <Title order={4} ff='Inter'>{expense.cost} PLN</Title>
            </div>
         </Flex>
      </Card>
   )
}

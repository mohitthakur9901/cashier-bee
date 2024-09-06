import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { orderItems } from "@/Data/FakeData";

const Orders = () => {




  return (
    <div>
      <Table>
        <TableCaption>A list of your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order Id</TableHead>
            <TableHead>Food Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Customer Phone</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>
              let Customer Know
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.orderId}</TableCell>
              <TableCell>{item.foodName}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.customerName}</TableCell>
              <TableCell>{item.customerPhone}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>{item.orderStatus}</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Pending</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Compete</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Cancelled</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>
                <Button>
                  Notify Customer
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Orders
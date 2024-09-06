
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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
import { menuItems } from '@/Data/FakeData';

const Menu = () => {

  

  const [openForm, setOpenForm] = useState(false);





  return !openForm ? (
    <div className='p-2'>
      <div className="flex items-end justify-end gap-5">
        <Button onClick={() => setOpenForm(!openForm)} className='bg-blue-900 hover:bg-blue-700 h-14 w-28'>
          Add Item
        </Button>
        <Button onClick={() => setOpenForm(!openForm)} className='bg-blue-900 hover:bg-blue-700 h-14 w-28'>
          Qr Code
        </Button>
      </div>

      <div className="py-10">
        <Table>
          <TableCaption>
            List of Menu Items
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.mealCategory}</TableCell>
                <TableCell>{item.isAvailable ? 'Yes' : 'No'}</TableCell>
                <TableCell><img src={item.foodImageLink} alt={item.name} className='h-10 w-10' /></TableCell>
                <TableCell>{item.createdAt.toDateString()}</TableCell>
                <TableCell>
                  <Button>
                    Update Item
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>

    </div>
  ) : (
    <div className="p-2">
      <div className="flex items-end justify-end">
        <Button onClick={() => setOpenForm(!openForm)} className='bg-blue-900 hover:bg-blue-700 h-14 w-28'>
          Go Back
        </Button>
      </div>

      <div className="">
        <form >
          {/* name, description, price, mealCategory, isAvailable foodImageLink*/}
          <div className="">
            <Label>Food Image</Label>
            <Input placeholder="Select Food Image" type='file' name='foodImage' />
          </div>


          <div className="">
            <Label>Name</Label>
            <Input placeholder="Enter name" type='text' name='name' />
          </div>

          <div className="">
            <Label>Descritpion</Label>
            <Input placeholder="About the Food" />
          </div>

          <div className="">
            <Label>price</Label>
            <Input placeholder="Enter price" />
          </div>

          <div className="">

            {/* DropDown */}
            <DropdownMenu>
              <DropdownMenuLabel>Food Categry</DropdownMenuLabel>
              <DropdownMenuTrigger>Select Category</DropdownMenuTrigger>
              < DropdownMenuSeparator>
                <DropdownMenuContent>
                  <DropdownMenuItem>Item 1</DropdownMenuItem>
                  <DropdownMenuItem>Item 2</DropdownMenuItem>
                  <DropdownMenuItem>Item 3</DropdownMenuItem>
                </DropdownMenuContent>

              </DropdownMenuSeparator>
            </DropdownMenu>

          </div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuLabel>Food Available</DropdownMenuLabel>
              <DropdownMenuTrigger>Select Category</DropdownMenuTrigger>
              < DropdownMenuSeparator>
                <DropdownMenuContent>
                  <DropdownMenuItem>Available</DropdownMenuItem>
                  <DropdownMenuItem>Not Available</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuSeparator>
            </DropdownMenu>
          </div>
          <Button type='submit' className='bg-blue-900 hover:bg-blue-700 h-14 w-28'>
            Add Item
          </Button>
        </form>
      </div>

    </div>
  )
}

export default Menu
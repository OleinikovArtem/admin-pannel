import Image from 'next/image'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { Product } from '@/types/product'
import { Pagination } from '@/types/pagination'
import { Button } from '@/components/ui/button'
import { MdOutlineEdit } from 'react-icons/md'

interface ProductsTableProps {
  products?: Pagination<Product>
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Count</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="w-[200px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.items.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Image src={product.imageUrl || ''} width={50} height={50} alt={product.name || ''} />
            </TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className={`font-medium ${product.isPublish ? 'text-green-500' : 'text-rose-500'}`}>
              {product.isPublish ? 'publish' : 'unpublish'}
            </TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>{product.price}$</TableCell>
            <TableCell className="w-[200px]">
              <Button size="icon" variant="ghost" className="hover:text-green-500">
                <MdOutlineEdit className="w-5 h-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import { MdOutlineEdit } from 'react-icons/md'

import { Product } from '@/types/product'
import { Pagination } from '@/types/pagination'

interface ProductsTableProps {
  products?: Pagination<Product>
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="pr-4">
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Count</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.items.map((product) => (
          <TableRow className="pr-4" key={product.id}>
            <TableCell>
              <Image
                src={product.imageUrl || ''}
                width="0"
                height="0"
                sizes="100px"
                className="w-[84px] h-[84px]"
                alt={product.name || ''}
              />
            </TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className={`font-medium ${product.isPublish ? 'text-green-500' : 'text-rose-500'}`}>
              {product.isPublish ? 'publish' : 'unpublish'}
            </TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>{product.price}$</TableCell>
            <TableCell>
              <Link href={'/dashboard/products/' + product.id}>
                <Button size="icon" variant="ghost" className="hover:text-green-500">
                  <MdOutlineEdit className="w-5 h-5" />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

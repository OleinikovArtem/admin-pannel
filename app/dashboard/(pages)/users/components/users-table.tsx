import Image from 'next/image'
import Link from 'next/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

import { MdOutlineEdit } from 'react-icons/md'

import { User } from '@/types/user'
import { Pagination } from '@/types/pagination'
import { RxAvatar } from 'react-icons/rx'

interface UsersTableProps {
  users?: Pagination<User>
}

export const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="pr-4">
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.items.map((user) => (
          <TableRow className="pr-4" key={user.id}>
            <TableCell>
              {user.image ? (
                <Image
                  src={user.image}
                  width="0"
                  height="0"
                  sizes="100px"
                  className="w-[84px] h-[84px]"
                  alt={user.name || ''}
                />
              ) : (
                <RxAvatar className="h-16 w-16" />
              )}
            </TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Link href={'/dashboard/users/' + user.id}>
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

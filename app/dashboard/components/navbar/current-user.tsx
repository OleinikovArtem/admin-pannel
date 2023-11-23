'use client'
import Image from 'next/image'
import { RxAvatar } from 'react-icons/rx'

import { useQuery } from '@apollo/client'
import { GET_PROFILE, GET_PROFILE_TYPE } from '@/graphql/users/query/getProfile'

export const CurrentUser = () => {
  const { data, loading, error } = useQuery<GET_PROFILE_TYPE>(GET_PROFILE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="flex items-center">
      <div className="pr-4">
        {data?.profile?.image ? (
          <Image
            src={data.profile?.image}
            width="0"
            height="0"
            sizes="32px"
            className="h-8 w-8 rounded"
            alt={data.profile?.name || ''}
          />
        ) : (
          <RxAvatar className="h-8 w-8" />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-sm">{data?.profile?.name}</span>
        <span className="text-zinc-500 text-xs">{data?.profile?.role?.toLowerCase()}</span>
      </div>
    </div>
  )
}

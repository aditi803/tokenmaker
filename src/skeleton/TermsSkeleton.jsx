import { Skeleton } from '@mui/material'
import React from 'react'

const TermsSkeleton = () => {
  return (
    <div className="container">
      <div style={{ width: "100%", padding: "6.5px 0", alignItems: "center", }}>
        <Skeleton variant="rectangular" width={180} height={35} />
        <Skeleton variant="rounded" width={900} height={10} className='my-3'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
        <Skeleton variant="rounded" width={900} height={10} className='my-1'/>
      </div>
    </div>
  )
}

export default TermsSkeleton
import { Skeleton } from '@mui/material'
import React from 'react'

const HeaderSkeleton = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", padding: "6.5px 0", alignItems: "center", }}>
        <Skeleton variant="rectangular" width={180} height={35} />
        <Skeleton variant="rounded" width={200} height={40} />
      </div>
    </div>
  )
}

export default HeaderSkeleton
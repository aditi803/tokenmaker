import { Skeleton } from '@mui/material'
import React from 'react'

const HeaderSkeleton = () => {
  return (
    <div style={{display:"flex", flexDirection: "row", width: "100%", justifyContent: "space-around" , alignItems: "center", padding: "20px 0", gap: "500px" }}>
        <Skeleton variant="rectangular" width={180} height={60} />
        <Skeleton variant="rounded" width={150} height={60} />
    </div>
  )
}

export default HeaderSkeleton
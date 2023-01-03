import { Skeleton } from '@mui/material'
import React from 'react'

const HeroSkeleton = () => {
    return (
        <div className="heroskeleton" style={{ padding: "100px 0 0", display: "flex", minHeight: "640px", alignItems: "center" }}>
            <div className="container">
                <div className='row align-items-center' >
                    <div className='col-8'>
                        <div style={{ flexDirection: "column", width: "100%", padding: "20px 0", justifyContent: "center", display: "flex", gap: "40px" }} className='left'>
                            <Skeleton variant="rounded" width={500} height={160} />
                            <Skeleton variant="rounded" width={650} height={120} />
                            <Skeleton variant="rectangular" width={177} height={60} />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='right'>
                            <Skeleton variant="circular" height={400} style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default HeroSkeleton
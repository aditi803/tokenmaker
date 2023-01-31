import { Skeleton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from "axios"

const MainSkeleton = () => {
    const data = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        { 
            id: 7 
        }, 
        { 
            id: 8
        },
        {
            id: 9
        },
        {
            id: 10
        },
        {
            id: 11
        },
        { 
            id: 12
        }
    ]

    return (
        <>

            <div className="container py-5 my-5">
                <div className='row g-3 mb-5'>
                    {data.map((value, index) => {
                        return <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="chain-item d-flex align-items-center justify-content-center flex-column">
                                <Skeleton variant="rounded" height={20} width={155} />
                                <Skeleton className='my-5' variant="rounded" height={71} width={76} />
                                <Skeleton className='mb-2' variant="rounded" height={10} width={200} />
                                <Skeleton variant="rounded" height={10} width={100} />
                            </div>
                        </div>
                        // }
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default MainSkeleton;

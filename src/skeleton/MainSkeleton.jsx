import { Skeleton } from '@mui/material'
import React from 'react'

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
        }
    ]
    return (
        <>
            <div className="container py-5 my-5">
                <div className='row gx-2'>
                    {data.map((value, index) => {
                        // if (index === 0) {
                        //   return <div className="chain-item">
                        //     {console.log(value.hrefPath, "jjjjjjj")}
                        //     <Link to={`/generator/solana`} className="chain-link chain-bsc">
                        //       <span className="title">{value.categoryName}</span>
                        //       <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${value?.networks[0].networkImage})` }}></span>
                        //       {/* {value?.networks[0]((img) => (
                        //         <span className="logo" style={{ backgroundImage: `url(${imageBaseUrl}${img.networkImage})` }}></span>
                        //       ))} */}
                        //       <span className="text-muted description">Create your token on {value.categoryName}</span>
                        //     </Link>
                        //   </div>
                        // }else {
                        return <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-4">
                            <div className="chain-item d-flex align-items-center justify-content-center flex-column">
                                <Skeleton variant="rounded" height={20} width={155} />
                                <Skeleton className='my-5' variant="rounded" height={71} width={76} />
                                <Skeleton className='mb-2' variant="rounded" height={10} width={200} />
                                <Skeleton variant="rounded" height={10} width={100} />
                            </div>
                        </div>
                        // }
                    })}
                </div>
            </div>
        </>
    )
}

export default MainSkeleton
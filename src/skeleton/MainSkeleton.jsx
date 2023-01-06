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
            id: 3,
        },
        {
            id: 4
        }
    ]
    return (
        <div className="chain-select">
            <>

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
                    return <div className="chain-item ">
                        <span className="title d-flex justify-content-center ">
                            <Skeleton variant="rounded" height={41} width={155} style={{marginTop:"19px"}}/>

                        </span>
                        <span className="logo text-center d-flex justify-content-center" style={{flexDirection:"column", alignItems:"center"}}>
                            <Skeleton variant="circular" height={71} width={76} style={{margin:"60px 0 30px"}}/>
                            <Skeleton variant="rounded" height={62} width={230} />
                            
                        </span>
                        <span className="text-muted description">

                        </span>
                    </div>
                    // }
                })}
            </>
        </div>
    )
}

export default MainSkeleton
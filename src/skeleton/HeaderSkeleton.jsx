import { Skeleton } from '@mui/material'
import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/EthContext/EtherProvider';

const HeaderSkeleton = () => {
  const { setSolDeploy, setDeploySuccess,startToggle, setStartToggle } = useContext(GlobalContext);

  return (
    <div className="container" style={{ display: !startToggle ? 'none' : 'block'}}>
      <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", padding: "6.5px 0", alignItems: "center", }}>
        <Skeleton variant="rectangular" width={180} height={35} />
        <Skeleton variant="rounded" width={200} height={40} />
      </div>
    </div>
  )
}

export default HeaderSkeleton
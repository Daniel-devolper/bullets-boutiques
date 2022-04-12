import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { getBulletsAsTSXList } from './modules/bulletsAsList'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { list } = useListContext() || []

  const bulletsGroup = getBulletsAsTSXList(bullets);
  const newListContextValue = list.concat(bulletsGroup)

  return (
    <ListContextProvider list={newListContextValue}>
      {
        <div>
          {children}
        </div>
      }
    </ListContextProvider>
  )
}

export default BulletGroup

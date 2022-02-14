import React from 'react'

export const Small = React.memo(({ value }) => {
  console.log('called');
  return (
    <small> { value } </small>
  )
})

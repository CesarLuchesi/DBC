import React from 'react'
import { useContext } from 'react'

import { CountContext } from '../context/CountContext'

export default function Mirror() {
  const {count, name} = useContext(CountContext);
  return (
    <div>espelho:{count} nome: {name}</div>
  )
}

import React, { useEffect } from 'react'
import axios from 'axios'

function Inicial() {
  async function setup() {
    const {data} = await axios.get('https://api.github.com/users/CesarLuchesi');
    console.log(data);
  }
  useEffect(() => {
    setup()
  }, [])
  return(
    <div></div>
  )
}

export default Inicial
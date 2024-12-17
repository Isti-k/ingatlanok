import React from 'react'

function IngatlanLista(props) {
  return (
    props.IngatlanLista.map((ingatlan)=>{
        return(<Ingatlanok ingatlan={ingatlan} key={ingatlan.id} />)
    })
  )
}

export default IngatlanLista
import React from 'react';
import IngatlanLista from './IngatlanLista';

function Ajanlatok(props) {
  return (
    <div>
        <tr>
            <td>key={props.ingatlan.id}</td>
            <td>{props.ingatlan.leiras}</td>
            <td>{props.ingatlan.datum}</td>
            <td>{props.ingatlan.tehermentes}</td>
          </tr>
    </div>
  )
}

export default Ajanlatok
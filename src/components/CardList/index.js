import React from 'react'

const CardList = props => {
  const {cardData,onChangeInputEle} = props 
  const {id,value} = cardData

  const onChangeVlaue = event => {
    let changedValue = event.target.value
    onChangeInputEle(id,changedValue)
  }

  return (
    <li>
      <input type='text' style={{color:'black',border:'1px solid black',padding:'10px',marginBottom:'10px', borderRadius:'6px',width:'120px',outline:'none',overFlow_X:'scroll'}} value={value} onChange={onChangeVlaue} />
    </li>
  )
}

export default CardList
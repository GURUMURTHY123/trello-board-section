import React from 'react'
import CardList from '../CardList'

const ListComponent = props => {
  const {listData,onClickAddCard,onChangeTitle, onChangeInputEle} = props 
  const {id,title,boardList} = listData

  const onClickButton = () => {
    onClickAddCard(id)
  }

  const onChangeTitleElement = event => {
    onChangeTitle(id,event.target.value)
  }
  
  return(
    <div style={{border:'1px solid',padding:'12px',marginRight:'10px',borderRadius:'8px',backgroundColor:'rgba(99, 98, 98, 0.055)',minHeight:'60px',flexShrink:0}}>
      <input type='text' style={{color:'black',border:'1px solid black',padding:'10px',marginBottom:'8px', borderRadius:'6px',width:'120px',outline:'none',overFlow_X:'scroll', fontWeight:'bold'}} value={title} placeholder="Enter the title" onChange={onChangeTitleElement} />
      <ul style={{padding:'0px',listStyleType:'none'}}>
        {(boardList.length!==0) && (boardList.map(eachListData=>(<CardList key={boardList.id} cardData={eachListData} onChangeInputEle={onChangeInputEle} />)))}
      </ul>
      <button onClick={onClickButton} style={{backgroundColor:'blue',border:'none',color:'white',borderRadius:'7px',paddingTop:'8px',paddingBottom:'8px',paddingLeft:'14px',paddingRight:'14px'}}>Add Card</button>
    </div>
  )
}

export default ListComponent
import React from 'react'
import {v4 as uuid4} from 'uuid'
import {Component} from 'react'
import ListComponent from './components/ListComponent'

class App extends Component{
  state = {boardListData:[]}

  onClickAddItem = () => {
    let newCard = {
      id:uuid4(),
      title:'',
      boardList:[]
    }
    this.setState({boardListData:[...this.state.boardListData,newCard]})
  }

  onChangeTitle = (id,titleValue) => {
    this.setState(prevState=>{
      let updatedData = prevState.boardListData.map(eachData=>{
        if (eachData.id===id){
          eachData = {...eachData,title:titleValue}
        }
        return eachData
      })
      return {boardListData:updatedData}
    })
  }

  onChangeInputEle = (id,value) => {
    this.setState(prevState=>{
      let updatedData = prevState.boardListData.map(eachData=>{
          let updatedCard = eachData.boardList.map(eachCard=>{
              if(eachCard.id===id){
                eachCard = {...eachCard,value:value}
              }
              return eachCard
          })
          return {...eachData,boardList:updatedCard}
      })
      return {boardListData:updatedData}
    })
  }

  onClickAddCard = id => {
    const {boardListData} = this.state
    let newCard = {
      id:uuid4(),
      value:''
    }
    const newBoardList = boardListData.map(eachData=>{
      if (eachData.id===id){
        eachData.boardList = [...eachData.boardList,newCard]
      }
      return eachData
    })
    this.setState({boardListData:newBoardList})
  }

  render(){
    const {boardListData} = this.state
    return(
      <div style={{display:'flex',alignItems:'flex-start',overflow:'auto',minHeight:'100vh'}}>
        {boardListData.map(eachList=>(
          <ListComponent key={eachList.id} listData={eachList} onClickAddCard={this.onClickAddCard} onChangeTitle={this.onChangeTitle} onChangeInputEle={this.onChangeInputEle} />
        ))}
        <button onClick={this.onClickAddItem} style={{backgroundColor:'blue',border:'none',color:'white',borderRadius:'7px',paddingTop:'8px',paddingBottom:'8px',paddingLeft:'14px',paddingRight:'14px',flexShrink:0}}>Add Item</button>
      </div>
    )
  }
}

export default App
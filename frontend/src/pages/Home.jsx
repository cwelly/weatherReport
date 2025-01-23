
import React, { useState } from "react"; 
import {useDroppable,DndContext, useDraggable} from '@dnd-kit/core';
import styled from "styled-components";
import {CSS} from '@dnd-kit/utilities';

function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  // const style = {
  //   transform:CSS.Translate.toString(transform)
  // };
  // console.log("리스터스 : ",{...listeners})
  // console.log('어트리뷰트 : ',{...attributes})
  
  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}
const DroggableObject=styled.div`
border: 1px;
width: 50px;
height: 50px;
z-index: 100;
`
const DroppableObject=styled.div`
  border:1px;
  width:500px;
  height: 100px;
  background-color: yellow;
 position: absolute;
 bottom: 0%;
 right: 0%;
 z-index: 101;
`
function Home(){
  const cards = []; // 카드 내용
  const [isDropped ,setIsDropped] = useState(false);
    return (<> 
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped?
      <Draggable  >
        <DroggableObject/>
      </Draggable>:null
      }
      <Droppable style={{"z-index":"-100"}}>
      {isDropped?<Draggable >
        <DroggableObject/>
      </Draggable>:
      <DroppableObject>여기다 놓자</DroppableObject>}
      
      
      </Droppable>
    </DndContext>
    </>);
    function handleDragEnd(event) {
      if (event.over && event.over.id === 'droppable') {
        setIsDropped(true);
      }
    }
} 

export default Home;
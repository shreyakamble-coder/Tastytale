import React from 'react'
import { Card } from 'react-bootstrap';

const RecipeInstruction = ({instruction}) => {
   return (
     <div className='mt-5'>
       <p className='sub-titles'>Instruction:</p>
       <Card.Text>{instruction}</Card.Text>
     </div>
   );
}

export default RecipeInstruction

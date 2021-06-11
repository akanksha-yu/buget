import React from 'react';
import {Checkbox, Form, Segment} from 'semantic-ui-react';
import {useState} from 'react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({addEntry}) {

  const [Description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [Isexpense,setIsexpense] = useState(true);

    return (
        
        <Form unstackable>
        <Form.Group>
          <Form.Input
          width={12}
          icon='tags'
          label="Description"
          placeholder="text" 
          value={Description}
          onChange={(event)=>setDescription(event.target.value)}
          />
          <Form.Input
          width={4}
          icon='dollar'
          label="value"
          placeholder="money"
          iconPosition='left'
          value={value}
          onChange={(event)=>setValue(event.target.value)}

           />
        </Form.Group>

 <Segment compact>
   <Checkbox
    toggle
    label='is expense'
    checked={Isexpense} 
    onChange={()=>setIsexpense((oldState)=>!oldState)}/>
   </Segment>

        <ButtonSaveOrCancel 
        addEntry={addEntry} 
       Description={Description}
        value={value}
        isExpense={Isexpense}/>
      </Form>
    )
}

export default NewEntryForm

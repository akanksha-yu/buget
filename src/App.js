import { Container} from 'semantic-ui-react';
import './App.css';
import {useState} from 'react';

import MainHeader from './Components/MainHeader';
import NewEntryForm from './Components/NewEntryForm';
import DisplayBalance from './Components/DisplayBalance';
import DisplayBalances from './Components/DisplayBalances';
import EntryLines from './Components/EntryLines';

function App() {
const [entries, setEntries] = useState(initialEntries)

function deleteEntry(id){
const result= entries.filter((entry)=> entry.id!== id);
setEntries(result);
console.log('result',result);
}

function addEntry(Description, value,isExpense){

  const result= entries.concat({
    id:entries.length+1,
    Description,
value,
isExpense
  })
  
  setEntries(result);
  console.log('add entry', result);
}

  return (
    <Container>
      <MainHeader title='BUDGET'/>
         <DisplayBalance title="Your Balance" value="200000" size="small"/>
          <DisplayBalances />
           <MainHeader title="History" type="H3" />
           <EntryLines entries={entries} deleteEntry={deleteEntry}/>
           <MainHeader title="Add  new Transactions" type="H3" />
           <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries =[
  {
    id:1,
    Description:"Work income",
  value:"$100000",
  isExpense:false
},
{
  id:2,
Description:"Rent",
value:"$100",
isExpense:true
},
{
  id:3,
  Description:"maintenance",
  value:"30$",
  isExpense:true
},
{
  id:4,
  Description:"website",
  value:"10$",
  isExpense:true
}
]

import './App.css';
import Form from './Componets/Form'
import Employee from './Componets/Empolyee';
import React, { useState} from 'react'

const closeFriends = [
  {
    name: 'Brian',
    email: 'nunezthegoat@lol.com',
    role: 'friend'
  },
  {
    name: 'emily',
    email: 'thequeen123@mycastle.com',
    role: 'classmate'
  },
]

const resetFriend = {
  name: '',
  email: '',
  role: '',
}

function App() {


const [friend, setFriend] = useState(closeFriends);

// make new friends
const [list, setList] = useState(resetFriend);

const newForm = (inputName, inputValue) =>{
  setList({
    ...list, 
    [inputName]: inputValue,
  })
};

const formSubmitted = () =>{
  const newClassMate = {
    name: list.name.trim(),
    email: list.email.trim(),
    role: list.role,
  }

  if (!newClassMate.name || !newClassMate.email || !newClassMate.role) {
    return;
  }
  setFriend([newClassMate, ...friend])
  setList(resetFriend)
};

  return (
    <div className='container'>
      <h1>These are the list of the boiisss!</h1>

      <Form 
      list={list} 
      update={newForm} 
      submit={formSubmitted}
      />

      {friend.map((friend) => {
        return <Employee key = {friend.id} details={friend} />
      })}
    </div>
  );
}

export default App;
import React from 'react'



const ExpenseGroup = () => {
    const groups = [
        {
            "name": "Natalie's Team",
            "id": "1",
        },
        {
            "name": "Sammy's Team",
            "id": "2",
        },
        {
            "name": "John's Team",
            "id": "3",
        },
        {
            "name": "Vladi's Team",
            "id": "4",
        },
    ]
  return (
    <div>
        <ul>
            {groups.map((group, index) => {
                return(
                    <div>
                        <li>Group Name: {group.name}</li>
                        <li>Group ID: {group.id}</li>
                        <br></br>
                    </div>   
                )
            })}
        </ul>
    </div>
  )
}

export default ExpenseGroup
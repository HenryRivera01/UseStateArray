// Setup Challenge

/* 

-Import data
-setup a state value
-people default value equal to data
-display list(people) in the browser


Create two functions

-One that removes sigle item from the list
-One that clears entire list

Render the list

*/

import { useState } from "react";
import { data } from "./data.js";

export const ArrayUseState = () => {
  const [people, setPeople] = useState(data);

  const removeOneItem = (id) => {
    console.log(id);
    const peopleFiltered = people.filter((person) => person.id !== id);
    console.log(peopleFiltered);
    return setPeople(peopleFiltered);
  };

  return (
    <div className="display-container">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            {name}
            <button type="button" onClick={() => removeOneItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

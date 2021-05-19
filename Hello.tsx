import { CONNREFUSED } from 'node:dns';
import React from 'react';
import { useReducer } from 'react';

const courses = [{ name: 'lala' }, { name: 'baba' }];

const Hello = () => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div>
      {console.log(state)}

      <div>
        {courses.map((course) => (
          <div key={course.name}>
            {course.name}
            <button
              onClick={() =>
                dispatch({ type: 'ADD_COURSE', payload: { name: course.name, score: 2 } })
              }
            >
              BUTTON
            </button>
            <button
              onClick={() => dispatch({ type: 'REMOVE_COURSE', payload: { name: course.name } })}
            >
              remoive
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hello;

function reducer(state, action) {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_COURSE':
      return [...state, payload];
    case 'REMOVE_COURSE':
      return state.filter((course) => course.name !== payload.name);

    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

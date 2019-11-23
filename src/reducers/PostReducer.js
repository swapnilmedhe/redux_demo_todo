

// const PostReducer =( state = [],action)=>{

//     switch (action.type) {
//         case 'ADD_POST':
//             return state.concat([action.data]);
            
//         default:
//             return state;
//     }
// }
// export default PostReducer;

const postReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST':
          return state.concat([action.data]);
        default:
          return state;
      }
}
export default postReducer;
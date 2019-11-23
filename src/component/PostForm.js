import React, { Component } from 'react'

 class PostForm extends Component {
  handleSubmit = (e) =>
  {
    e.preventDefault();
    const title= this.getTitle.value;
    const message =  this.getMessage.value;
    const data ={
        id: new Date(),
        title,
        message 
    }
   console.log('data ====== > ' , data);
   
  }

    render() {
        return (
            <div>
                <h3>Creating Post ....</h3>
                <form onSubmit={this.handleSubmit}>
                    <input required type='text' placeholder='Enter post title  ' ref={(input)=>this.getTitle = input}  /> <br/><br/>
                    <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input} /><br /><br />
   <                button>Post</button>
                </form>
            </div>
        )
    }
}

export default PostForm;

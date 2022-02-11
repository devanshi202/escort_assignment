import React, { Component } from 'react';
import axios from "axios"
import "./queries.css"
export class Queries extends Component {
    constructor(){
        super();
        this.state={
            queries:[]
        }
    }

    componentDidMount= async ()=>{
        let queries = await axios.get("/queries");
        //loop on queries and add in new arr then set state?
        //or
        console.log(queries);
        this.setState({
            queries: queries.data
        })
    }
  render() {
      let queriesArr = this.state.queries;
    return <div className='queriesDiv'>
        <table className='queriesTable'>
            <thead>
                <tr>
                    <th>Farmer</th>
                    <th>Query</th>
                </tr>
            </thead>
            <tbody>

        {
         queriesArr.map((queryObj)=>{
             let n,q;
             for(let objProp in queryObj){
                 if(queryObj.hasOwnProperty(objProp)){

                     n=objProp;
                     q=queryObj[objProp];
                 }
             }
            return (

                <tr key={n}>
                    <td>{n}</td>
                    <td>{q}</td>
                </tr>
                
            );
         })   
        }
            </tbody>
        </table>

        
    </div>;
  }
}
//download option add
export default Queries;

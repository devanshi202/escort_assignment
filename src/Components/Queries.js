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
        let queries = await axios.get("https://sf06g1xl98.execute-api.us-west-2.amazonaws.com/default/getQueries");
        //loop on queries and add in new arr then set state?
        //or
        console.log(queries);
        this.setState({
            queries: [queries.data]
        })
    }
  render() {
      let queriesArr = this.state.queries;
    return <div className='queriesDiv container'>
        <table className='queriesTable container'>
            <thead>
                <tr>
                    <th className='bs'>Farmer</th>
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
                    <td className='white'>{n}</td>
                    <td className='str'>{q}</td>
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

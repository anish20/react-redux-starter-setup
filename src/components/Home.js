import React from 'react';
import {connect} from 'react-redux';
import {CreateData,UpdateData,ListData,DeleteData} from '../services/actions/action'
function Home(props) {
    console.log("Home",props.crudData)
    return (
        <div>
            <button onClick={()=>props.addCrudDataHandler({id:1,name:"Anish"})}>Save</button>
        </div>
    );
}

const mapStateToProps=state=>({
    crudData:state
})

const mapDispatchToProps=dispatch=>({
    addCrudDataHandler:data=>dispatch(CreateData(data)),
    
})

export default  connect(mapStateToProps,mapDispatchToProps) (Home);

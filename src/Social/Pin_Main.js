import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class Pin_Main extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is Pinterest home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default Pin_Main
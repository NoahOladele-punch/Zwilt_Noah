import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class Tn_Main extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is Tinder home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default Tn_Main
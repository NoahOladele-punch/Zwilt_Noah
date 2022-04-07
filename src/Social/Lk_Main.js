import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class Lk_Main extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is linkedin home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default Lk_Main
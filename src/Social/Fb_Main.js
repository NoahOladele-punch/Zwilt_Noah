import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class Fb_Main extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is Facebook home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default Fb_Main
import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class Tk_Main extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is Tiktok home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default Tk_Main
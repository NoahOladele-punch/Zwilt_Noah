import React, {Component} from 'react';
import {Container} from 'react-bootstrap'


import SideNavBar from '../CommonComp/SideNavBar'

class UserSettings extends Component{
    render(){
        return(
            <>

                <SideNavBar/>
               <Container>                    
                    <div>
                        <h1>this is User Settings home</h1>
                     </div>
                </Container>
            </>
        )
    }
}

export default UserSettings
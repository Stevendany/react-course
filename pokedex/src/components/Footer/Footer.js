import React, { PureComponent } from 'react';
/**
 * PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. 
 * When props or state changes, PureComponent will do a shallow comparison on both props and state. 
 * Component on the other hand won’t compare current props and state to next out of the box. 
 * Thus, the component will re-render by default whenever shouldComponentUpdate is called.
 */
class Footer extends PureComponent{
    render(){
        return(
            <div className="footer">        
                <p className="pt">React Training program by React Team</p>
                <div>
                   
                </div>
            </div>
        )
    }
}

export default Footer;
import React, { Component } from "react";


export default function asyncComponent(getComponent) {
   
    class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

       UNSAFE_componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
    return AsyncComponent;
}


//Code Summary ------>

// The asyncComponent() function takes a parameter, getComponent 
// which is a function that will dynamically import a given component. 
// It will not be called until the first mount. 
// On componentWillMount, we simply call the getComponent 
// function that is passed in and save the dynamically loaded component in the state. 
// Finally, we conditionally render the component if it has completed loading, 
// if not we simply render null.
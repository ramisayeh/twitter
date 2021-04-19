import React from 'react';
import firebase from 'firebase'
import { auth } from "./firebase";

const withAuthProtection = redirectPath => WrappedComponent => {
    class WithAuthProtection extends React.Component {
      componentDidMount() {
    
        const { history } = this.props;
        if (!auth.currentUser) {
          return history.push(redirectPath)
        }
      }
      componentWillReceiveProps(nextProps) {
        const { me, history } = this.props;
        const { me: nextMe } = nextProps;
        if (me && !nextMe) {

    
          history.push(redirectPath)
        }
      }
      render() {
        const { me } = this.props;
        if (!me) {
      
          return null
        }
        return <WrappedComponent {...this.props} />
      }
    }
     
    return WithAuthProtection
  }
  export default withAuthProtection;
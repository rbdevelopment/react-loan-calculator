import { connect } from 'react-redux'
import App from '../components/App';

const mapStateToProps = (state, ownProps) => ({
    accepted: state.accepted,
    confirmed: state.confirmed
});

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;
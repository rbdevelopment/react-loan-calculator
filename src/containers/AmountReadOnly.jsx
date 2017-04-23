import { connect } from 'react-redux'
import AmountReadOnlyBox from '../components/AmountReadOnlyBox';

const mapStateToProps = (state, ownProps) => ({
    amount: state.installment
});

const AmountReadOnly = connect(
    mapStateToProps
)(AmountReadOnlyBox);

export default AmountReadOnly;
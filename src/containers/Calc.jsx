import { connect } from 'react-redux';
import * as actions from '../logic/actions';
import Calc from '../components/Calc';

const mapStateToProps = (state, ownProps) => ({
  incomplete: !(state.amount && state.months && state.purpose && state.installment)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => dispatch(actions.accept()),
  onPurposeChanged: (value) => dispatch(actions.updateLoanField('purpose', value)),
  onMonthsChanged: (value) => dispatch(actions.updateLoanField('months', value)),
  onAmountChanged: (value) => dispatch(actions.updateLoanField('amount', value))
});

const CalcContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc);

export default CalcContainer;
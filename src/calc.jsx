import React from 'react';
export default class CalcApp extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <label htmlFor="email">What would you like the loan for?</label>
                    <div className="btn-group">
                        <button className="btn btn-default">Car</button>
                        <button className="btn btn-primary">Motorbike</button>
                        <button className="btn btn-default">Holiday</button>
                        <button className="btn btn-default">Home cinema</button>
                    </div>
                    <div className="control-validation">please decide what the loan is for</div>
                </div>
                <div className='m1'>
                    <label htmlFor="email">How much do you want to borrow?</label>
                    <div className="input-group">
                        <span className="input-group-addon">&pound;</span>
                        <input type="text" className="form-control" id="amount" autoComplete="off" />
                        <span className="input-group-addon">.00</span>
                    </div>
                    <div className="control-validation">please provide the amount</div>
                </div>
                <div className='m1'>
                    <label htmlFor="email">Over what period?</label>
                    <div className="btn-group">
                        <button className="btn btn-default">24 months</button>
                        <button className="btn btn-primary">36 months</button>
                        <button className="btn btn-default">48 months</button>
                        <button className="btn btn-default">60 months</button>
                    </div>
                    <div className="control-validation">please select how many months</div>
                </div>
                <div className='m1'>
                    <label htmlFor="">Your monthly installment with us would be</label>
                    <div className="input-group">
                        <span className="input-group-addon">&pound;</span>
                        <input type="text" className="form-control" id="installment" readOnly={true} />
                    </div>
                </div>
                <div className='m1'>
                    <button className='btn btn-success'>I'm happy with the offer</button>
                </div>
            </section >
        );
    }
}
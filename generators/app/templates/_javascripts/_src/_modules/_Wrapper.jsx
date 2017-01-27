import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		
	}

	render() {
		return (
			<div className="wrapper">
				<button onClick={this.clickHandler}>Click Me!!!!</button>
				<div>
						{this.props.grades.map((grade, index) => <span>{index + 1}.  {grade}<br/></span>)}					
				</div>
			</div>
		)
	}
}

// const mapStateToProps = (state) => ({
// 	grades: state.app.grades
// })

export default Wrapper = connect(mapStateToProps)(Wrapper)

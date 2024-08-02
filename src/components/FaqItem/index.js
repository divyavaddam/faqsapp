// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    plusIconClicked: false,
  }

  onClickingIcon = () => {
    this.setState(prevState => ({
      plusIconClicked: !prevState.plusIconClicked,
    }))
  }

  answer = () => {
    const {eachQuestion} = this.props
    const {answerText} = eachQuestion
    return (
      <div>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </div>
    )
  }

  render() {
    const {plusIconClicked} = this.state
    const {eachQuestion} = this.props
    const {questionText} = eachQuestion
    const imgUrl = plusIconClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = plusIconClicked ? 'minus icon' : 'plus icon'

    return (
      <li className="list">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <img
            src={imgUrl}
            alt={altText}
            className="icon"
            onClick={this.onClickingIcon}
          />
        </div>

        {plusIconClicked ? this.answer() : null}
      </li>
    )
  }
}
export default FaqItem

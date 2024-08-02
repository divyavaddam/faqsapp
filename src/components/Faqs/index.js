// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="heading">FAQs</h1>
        <ul className="unordered-list">
          {faqsList.map(eachQuestion => (
            <FaqItem eachQuestion={eachQuestion} key={eachQuestion.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

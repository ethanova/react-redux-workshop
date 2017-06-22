import React from 'react'

const PodList = (props) => {
  // write a renderPods function here that uses .map() on the pods
  // data passed down through props. Don't forget elements created
  // inside map need a key= prop!
  return (
    <div>
      { renderPods }
    </div>
  )
}

PodList.propTypes = {
}

export default PodList

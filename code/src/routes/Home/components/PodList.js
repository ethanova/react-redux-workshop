import React from 'react'

const PodList = (props) => {
  const renderPods = props.pods.map((pod, idx) => (
    <div key={idx}>
      The ship {pod.shipName} is piloted by {pod.pilotName} and has a max
      speed of { pod.maxSpeed } and acceleration of { pod.maxAcceleration }
    </div>
  ))
  return (
    <div>
      { renderPods }
    </div>
  )
}

PodList.propTypes = {
  pods: React.PropTypes.array,
}

export default PodList

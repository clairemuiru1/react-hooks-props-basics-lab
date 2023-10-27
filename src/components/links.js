import React from 'react'

function links(props) {
  return (
    <div>
        <h3>links</h3>
        <a href="https://github.com/liza">{props.github}</a>
        <a href="https://www.linkedin.com/in/liza/">{props.linkedin}</a>
    </div>
  )
}

export default links
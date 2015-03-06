React = require 'react'
eventStore = require './events/eventStore'
eventComp = require './events/eventsComp'

React.render(
  <eventComp store={eventStore} />,
  document.getElementById('eventComponent')
)

module.exports = nil

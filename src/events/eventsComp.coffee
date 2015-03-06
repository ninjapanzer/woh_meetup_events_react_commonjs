
React = require 'react'
dispatcher = require './eventDispatcher'
eventComp = require './eventComp'

EventsComponent = React.createClass
  getInitialState: ->
    dispatcher.register (payload)=>
      switch payload.actionType
        when "load-events"
          @setState({ events: payload.events })
    return { events: [] }

  render: ->
    <div className='events'>
    {
      @state.events.map (event, i)=>
        <eventComp event={event}/>
    }
    </div>
module.exports = EventsComponent

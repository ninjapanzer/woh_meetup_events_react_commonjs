jest.dontMock('../src/events/eventsComp.coffee');
jest.dontMock('../src/events/eventComp.coffee');

describe('eventsComp', function() {
  it('YAY mutliple events', function() {
    var React = require('../bower_components/react/react-with-addons.js');
    var EventsComp = require('../src/events/eventsComp.coffee');
    var Dispatcher = require('../src/events/eventDispatcher.coffee');
    var TestUtils = React.addons.TestUtils;

    var event = {
      get: function(thing){
        return thing;
      }
    };

    var events = [event,event];

    var eventBox = TestUtils.renderIntoDocument(
      React.createElement(EventsComp, {event: event})
    );

    Dispatcher.dispatch({
      "actionType": "load-events",
      "events": events
    });

    var box = TestUtils.scryRenderedDOMComponentsWithClass(
      eventBox, 'when');

    expect(box.length).toEqual(2);
    //expect(box.getDOMNode().textContent).toEqual('When');
  });
});
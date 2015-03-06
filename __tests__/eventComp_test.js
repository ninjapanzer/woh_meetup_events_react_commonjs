jest.dontMock('../src/events/eventComp.coffee');

describe('eventComp', function() {
  it('sees if the state is passed correctly to event', function() {
    var React = require('../bower_components/react/react-with-addons.js');
    var TestUtils = React.addons.TestUtils;
    var EventComp = require('../src/events/eventComp.coffee');

    var event = {
      get: function(thing){
        return thing;
      }
    };

    var eventBox = TestUtils.renderIntoDocument(
      React.createElement(EventComp, {event: event})
    );

    var box = TestUtils.findRenderedDOMComponentWithClass(
      eventBox, 'event');

    expect(box.getDOMNode().textContent).toContain('yes_rsvp_count');
    expect(eventBox.state.get('name')).toEqual('name');
  });
});

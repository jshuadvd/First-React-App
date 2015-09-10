var Button = React.createClass({
getInitialState: function() {
  return {counter: 0};
},
handleClick : function() {

}
render: function() {
  return (
  <button onClick={this.handleClick}>{this.state.counter}</button>
  )
 }
});
React.render(<Button />, document.getElementById("root"));

var Button = React.createClass({

render: function() {
  return (
  <button onClick={this.props.localHandleClick}>+{this.props.increment}</button>
  )
 }
});

var Result = React.createClass({
  render: function() {
    return (
      <div>{this.props.localCounter}</div>
   )
  }
})

var Main = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  handleClick : function() {
    this.setState({ counter: this.state.counter+1 });
  },

  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} increment={1}/>
        <Button localHandleClick={this.handleClick} increment={24}/>
        <Button localHandleClick={this.handleClick} increment={48}/>
        <Button localHandleClick={this.handleClick} increment={12}/>
        <Result localCounter={this.state.counter}/>
      </div>
    )
  }
})

React.render( < Main / > , document.getElementById("root"));

var GreeterMessage = React.createClass ({
  render : function(){
      return (
        <div>
          <h1>Some H1</h1>
          <p>some paragraph</p>
        </div>
      )
  }
});

var GreeterForm = React.createClass ({
  render : function (){
      return (
        <div>
            <form>
              <input type="text"/>
              <button>Set Button</button>
            </form>
        </div>
      )
  }
});




var Greeter = React.createClass({
  getDefaultProps : function(){
    return {
      name:'React',
      message: 'This is the default message'
    }
  },
  getInitialState : function(){
    return {
      name: this.props.name
    };
  },
  onButtonClick : function(e){
    e.preventDefault();
    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';
    if (typeof name === 'string' && name.length > 0){
      this.setState({
        name : name
      });
    }

  },
  render : function () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

        <GreeterForm/>

      </div>
    );
  }
});

var firstName = "Raphael";
var msg = "Seja bem-vindo!";

ReactDOM.render(
    <Greeter name={firstName} message={msg}/>,
    document.getElementById('app')
);

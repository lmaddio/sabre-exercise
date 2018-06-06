import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Input
} from 'reactstrap';
import { connect } from 'react-redux';

import {
  setInputState
} from '../redux/actions';
import { getInputsValues } from '../redux/selectors';

class PlayersForm extends Component {
  componentDidMount() {
    this.props.setInputState();
  }

  _onChangeInput(e, name) {
    this.props.setInputState({[name]: e.target.value});
  }

  render() {
    return (
      <Form inline style={{margin: "20px auto"}}>
        <FormGroup >
          { this.props.fields.map(({options, onValid, ...f})=>{
            let children = null;
            switch(f.type) {
              case "select":
                children = (
                  <Input {...f}
                    onChange={(e)=>this._onChangeInput(e, f.name, onValid)} 
                    value={this.props.inputs[f.name] || ""} >
                    {Object.entries(options).map(([key, value])=>(
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </Input>
                );
              break;
              default: 
                children = (<Input {...f}
                  onChange={(e)=>this._onChangeInput(e, f.name, onValid)} 
                  value={this.props.inputs[f.name] || ""} /> 
                );
            }
            return <FormGroup key={f.name} className="mb-2 mr-sm-2 mb-sm-0" children={children}/>
          })}
        </FormGroup>            
        <Button onClick={(e)=>this.props.action(this.props.inputs)}>Search</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputs: getInputsValues(state)
  };
};

export default connect(mapStateToProps, { setInputState })(PlayersForm);

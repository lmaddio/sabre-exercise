import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Input,
  Col
} from 'reactstrap';
import { connect } from 'react-redux';
// REDUX
import {
  setInputState
} from '../redux/actions';
import { getInputsValues } from '../redux/selectors';
// STYLES
import './Form.css';

class PlayersForm extends Component {
  componentDidMount() {
    this.props.setInputState();
  }

  _onChangeInput(e, name) {
    this.props.setInputState({[name]: e.target.value});
  }

  render() {
    return (
      <Form inline className="PlayersForm">
        <FormGroup row style={{width: "100%"}}>
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
            return (
              <Col xs={12} sm={this.props.length % 2 === 0 ? 6 : 12} md={3} key={f.name}>
                <FormGroup children={children}/>
              </Col>
            );
          })}
          <Col xs={12} md={3} style={{textAlign: "right"}}>
            <Button onClick={(e)=>this.props.action(this.props.inputs)} color="light">Search</Button>
          </Col>
        </FormGroup>            
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

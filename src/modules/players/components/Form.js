import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Input,
  Col
} from 'reactstrap';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
// REDUX
import {
  setInputState
} from '../redux/actions';
import { getInputsValues } from '../redux/selectors';
// STYLES
import './Form.css';

const SELECT_KEY = v4();

class PlayersForm extends Component {
  componentDidMount() {
    this._clearForm();
  }

  _clearForm() {
    const obj = {
      value: "",
      state: true
    };
    const emptyState = this.props.fields.reduce((o, a)=>Object.assign({}, o.type ? {[o.name]: obj} : o, {[a.name]: obj}));
    this.props.setInputState(emptyState);
  }

  _onChangeInput({e, name, onValid}) {
    const {value} = e.target;
    const obj = {
      value,
      state: onValid ? onValid(value) : true
    };
    this.props.setInputState({[name]: obj});
  }

  render() {
    const {buttonDisabled, ...inputs} = this.props.inputs;
    return (
      <Form inline className="PlayersForm">
        <FormGroup row style={{width: "100%"}}>
          { this.props.fields.map(({options, onValid, validateInput, ...f})=>{
            let children = null;
            const {value="", state} = inputs[f.name] || {};
            switch(f.type) {
              case "select":
                children = (
                  <Input {...f}
                    onChange={(e)=>this._onChangeInput({e, name: f.name, onValid, validateInput})} 
                    value={value} >
                    <option key={SELECT_KEY} value="">Select option</option>
                    {Object.entries(options).map(([key, value])=>(
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </Input>
                );
              break;
              default: 
                children = (<Input {...f}
                  invalid={!state}
                  onChange={(e)=>this._onChangeInput({e, name: f.name, onValid, validateInput})} 
                  value={value} />
                );
            }
            return (
              <Col xs={12} sm={this.props.length % 2 === 0 ? 6 : 12} md={3} key={f.name}>
                <FormGroup children={children} />
              </Col>
            );
          })}
          <Col xs={12} md={3} style={{textAlign: "right"}}>
            <Button 
              disabled={buttonDisabled}
              onClick={(e)=>this.props.action(inputs)} 
              color="light"
              >
            Search</Button>
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

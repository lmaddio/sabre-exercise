import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  FormText,
  Label, 
  Input, 
  Container,
  Table
} from 'reactstrap';
import { connect } from 'react-redux';

import { getPlayers } from '../redux/actions';

class PlayersForm extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.getPlayers();
  }

  render() {
    return (
      <Container>
        <Form inline style={{margin: "20px auto"}}>
          <FormGroup >
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
          </FormGroup>            
          <Button>Submit</Button>
        </Form>
        <Table striped>
          <thead>
            <tr>
              <th>Player</th>
              <th>Position</th>
              <th>Team</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps({players}) {
    console.log("mapStateToProps", players);
    return {};
}

export default connect(mapStateToProps, {getPlayers})(PlayersForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container
} from 'reactstrap';
// REDUX
import { 
  getPlayers,
  setFilters
} from '../../redux/actions';
import { getVisiblePlayers } from '../../redux/selectors';
// COMPONENTS
import Form from '../../components/Form';
import Table from '../../components/Table';
// UTILS
import { TABLE_COLUMNS, FORMS_FIELDS } from '../../utils';

class PlayersList extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const {players} = this.props;
    return (
      <Container className="PlayersList">
        <Form action={this.props.setFilters} fields={FORMS_FIELDS}/>
        { 
          players.length > 0 ? <Table columns={TABLE_COLUMNS} rows={players}/> : null
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: getVisiblePlayers(state)
  };
};

PlayersList.propTypes = {
  getPlayers: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(PropTypes.array).isRequired
};

export default connect(mapStateToProps, { getPlayers, setFilters })(PlayersList);
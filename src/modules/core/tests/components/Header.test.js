import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

describe('Header render',()=>{
  const container = shallow(<Header /> );
  it('Render component', () => {
    expect(container.length).toEqual(1)
  });

  it('Render with childrens', () => {
    expect(container.find(Navbar)).toHaveLength(1);
    expect(container.find(Navbar).shallow().find(NavbarBrand)).toHaveLength(1);
  });
});
import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Loader from '../../components/Loader';

describe('Loader passing props directly from store',()=>{
  const initialState = { loaderState: { loader: true } };
  const mockStore = configureMockStore();
  let store, container;

  beforeEach(()=>{
    store = mockStore(initialState);
    container = shallow(<Loader store={store} /> );
  });

  it('Render component', () => {
    expect(container.length).toEqual(1)
  });

  it('Render with initialState', () => {
    expect(container.prop('loader')).toEqual(true);
  });
});
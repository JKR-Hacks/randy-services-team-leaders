/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { doesNotReject } from 'assert';
import App from './App';
import Teamleaders from './components/Teamleaders';

describe('App component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('Should update a state in a callback', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ photos: 'new' }, () => {
    expect(wrapper.state()).toEqual({ photos: 'new', sample: [], side: 'Offense' });
  });
});

it('Should change the state when changeSide() is called', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().changeSide('test');
  expect(wrapper.state()).toEqual({ photos: [], sample: [], side: 'test' });
});

it('Should call componentDidMount', () => {
  const spy = jest.spyOn(App.prototype, 'componentDidMount');
  const wrapper = mount(<App />);
  wrapper.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
});

it('Should return a div element', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.type()).toEqual('div');
});

import React from 'react';
import App from './App';
import Nav from './Nav';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });

    it('renders app without crashing', () => {
        const app = mount(<App />);
        expect(app.find(Nav).length).toEqual(1);
    });
});

describe('Nav', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Nav />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('App', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<App />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

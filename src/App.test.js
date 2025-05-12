import React from 'react';
// const { expect } = require('chai');
import {expect} from 'chai';
import { render, screen } from '@testing-library/react';
import Enzyme, { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Form from './components/Form/Form';

configure ({ adapter: new Adapter() });

{/* <Form> */}
describe("App", () => {
    let wrapper = shallow(<App />)
    it("should be a function", () => {
      expect(App).to.be.a("function")
    })
    // it("should be a function", () => {
    //     // expect(Form).to.be.a("function")
    //     expect('Form').toBeInTheDocument()
    //   })
    it("should have the component Form", () => {
    expect(wrapper.find("Form"))
    })
    it("should have the component NavBar", () => {
        expect(wrapper.find("Filters"))
    })
    it("should have the component NavBar", () => {
        expect(wrapper.find("Pages"))
    })
    it("should have the component NavBar", () => {
        expect(wrapper.find("Countries"))
    })
})
// test('renders learn react link', () => {
//     shallow(<App />);
  
//   const linkElement = screen.getByText(/Henry/i);
//   expect('linkElement').toBeInTheDocument();
// });

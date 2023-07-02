import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
// import toJson from "enzyme-to-json";
import ReactShallowRenderer from "react-test-renderer/shallow";

test("should render Header correctly", () => {
  const renderer = new ReactShallowRenderer();
  console.log(renderer);
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
  console.log(renderer.getRenderOutput());
});

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(toJson(wrapper)).toMatchSnapshot();
  // expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("h1").length).toBe(1);
});

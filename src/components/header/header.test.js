import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils";
import Header from "./index";

const setUp = (props = {}) => {
  return shallow(<Header {...props}></Header>);
};

describe("<Header/> component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const wrapper = findByTestAttr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});

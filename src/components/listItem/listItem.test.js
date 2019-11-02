import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../utils";
import ListItem from "./index";

describe("ListItem Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text"
      };
      wrapper = shallow(<ListItem {...props}></ListItem>);
    });
    it("Should render without any errors", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });
    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a description", () => {
      const desc = findByTestAttr(wrapper, "componentDescription");
      expect(desc.length).toBe(1);
    });
  });
  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text"
      };
      wrapper = shallow(<ListItem {...props}></ListItem>);
    });
    it("Component is not rendered", () => {
      const component = findByTestAttr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});

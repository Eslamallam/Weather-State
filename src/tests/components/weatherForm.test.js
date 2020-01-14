import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json";
import WeatherForm from "../../components/WeatherForm";
import details from "../fixtures/weatherDetails";

configure({ adapter: new Adapter() });

test("should render weather form correctly", () => {
  const wrapper = shallow(<WeatherForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should render weather form correctly with data", () => {
  const wrapper = shallow(<WeatherForm details={details} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

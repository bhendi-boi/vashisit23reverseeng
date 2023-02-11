import { Tab } from "@headlessui/react";
import React from "react";

const Map = () => {
  return (
    <Tab.Group className="flex justify-center my-2 font-medium bg-white font-map">
      <Tab.List className="p-1 mx-auto text-white bg-button-inactive">
        <Tab
          className={({ selected }) => {
            return (
              "px-4 py-2 m-1 rounded-md  " +
              (selected
                ? "bg-button-active text-white"
                : "bg-button-inactive text-button-active")
            );
          }}
        >
          Discover
        </Tab>
        <Tab
          className={({ selected }) => {
            return (
              "px-4 py-2 m-1 rounded-md  " +
              (selected
                ? "bg-button-active text-white"
                : "bg-button-inactive text-button-active")
            );
          }}
        >
          Hackathons
        </Tab>
        <Tab
          className={({ selected }) => {
            return (
              "px-4 py-2 m-1 rounded-md  " +
              (selected
                ? "bg-button-active text-white"
                : "bg-button-inactive text-button-active")
            );
          }}
        >
          Builders
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default Map;

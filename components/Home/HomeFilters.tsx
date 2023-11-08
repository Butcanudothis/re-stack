"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "@/components/ui/button";

const HomeFilters = () => {
  const active = "frequent";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          onClick={() => console.log("clicked")}
          key={item.name}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none
          ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-dark-500"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;

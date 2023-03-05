import React from "react";
import { Form } from "react-bootstrap";
import FormItem from "./FormItem";

function Forms(props) {
  return (
    <>
      <div className="text-left">
        {props.list[0].items?.map((item, index) => {
          return (
            <>
              <div>{item.label} </div>
              <div>{item.type} </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Forms;

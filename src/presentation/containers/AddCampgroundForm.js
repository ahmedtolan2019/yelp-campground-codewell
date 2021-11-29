import React from "react";
import { Button } from "./../components/Button";
import {
  Form,
  FormInput,
  FormTextArea,
  FormFileInput,
} from "./../components/Form";
import { Link } from "react-router-dom";
export const AddCampgroundForm = () => {
  return (
    <Form>
      <FormInput
        label="Campground Name"
        name="campgroundname"
        placeholder="Seven Sisters Waterfall"
        rules={{ required: "please Enter a comment" }}
      />
      <FormInput
        label="Price"
        rules={{ required: "please Enter a comment" }}
        type="number"
        name="price"
        placeholder="$198"
      />
      <FormFileInput rules={{ required: "please Enter a comment" }} />
      <FormTextArea
        label="Description"
        name="descriprion"
        rules={{ required: "please Enter a comment" }}
        placeholder="The Seven Sisters is the 39th tallest waterfall in Norway. The 410-metre (1,350 ft) tall waterfall consists of seven separate streams, and the tallest of the seven has a free fall that measures 250 metres (820 ft). The waterfall is located along the Geirangerfjorden in Stranda..."
      />
      <Button text="Add Campground" />
    </Form>
  );
};

import React from "react";
import { Button } from "./../components/Button";
import { Form, FormTextArea } from "./../components/Form";

export const AddReviewForm = () => {
  return (
    <Form>
      <FormTextArea
        label="Description"
        name="descriprion"
        placeholder="This was probably the best camp i have visited in the past year. definitely recommended and you must do it to enjoy the view."
        rules={{ required: "please Enter a comment" }}
      />
      <Button text="Post Comment" />
    </Form>
  );
};

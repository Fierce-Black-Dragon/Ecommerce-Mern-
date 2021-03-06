import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useForm } from "react-hook-form";
import { Button, Select } from "@material-ui/core";
import { savemypaymentMethod } from "../../Redux/Actions/PaymentMethodActopn";
import { useDispatch } from "react-redux";

export default function PaymentForm() {
  const { register, handleSubmit } = useForm();
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(savemypaymentMethod(data));
    setSelected(true);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Choose Payment method:</label>
            <Select
              native
              {...register("paymentMethod", { required: true })}
              inputProps={{
                name: "paymentMethod",
                id: "paymentMethod-native-simple",
              }}
              fullWidth
            >
              <option aria-label="None" value="" />
              <option aria-label="Cash" value="cash">
                Cash on delivery
              </option>
              <option aria-label="Paypal" value="paypal">
                {" "}
                PAYPAL
              </option>
            </Select>
            {selected ? (
              ""
            ) : (
              <p style={{ color: "green" }}>
                {" "}
                plz submit select paymentMethod before next
              </p>
            )}
            {selected ? (
              ""
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "10px" }}
              >
                select
              </Button>
            )}
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

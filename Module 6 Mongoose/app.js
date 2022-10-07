const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
      unique: true,
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name must be less than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    price: {
      typeof: Number,
      required: [true, "Please provide a price"],
      min: [0, "Please provide a price with positive value"],
    },
    unit: {
      type: String,
      required: [true, "Please provide a unit"],
      enum: {
        values: ["kg", "liter", "pcs"],
        message: "unit value cannot be {VALUE}, must be kg,liter,pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Please provide a quantity value"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
      },
      message: "Quantity must be an integer value",
    },
    status: {
      type: String,
      required: true,
      enum: {
        value: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status cannot be {VALUE}",
      },
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    categories: [
      {
        name: {
          type: String,
          required: true,
        },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timeStamps: true,
  }
);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;

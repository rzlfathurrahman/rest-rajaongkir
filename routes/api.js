const express = require("express");
const router = express.Router();
const axios = require("axios");

axios.defaults.baseURL = "https://api.rajaongkir.com/starter";
axios.defaults.headers.common["key"] = "ENTER_YOUR_API_KEY_HERE";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

router.get("/provinsi", (req, res) => {
  axios
    .get("/province")
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

router.get("/kota/:provID", (req, res) => {
  const id = req.params.provID;
  axios
    .get(`/city?province=${id}`)
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

router.get("/ongkos/:asal/:tujuan/:berat/:kurir", (req, res) => {
  const param = req.params;
  axios
    .post("/cost", {
      origin: param.asal,
      destination: param.tujuan,
      weight: param.berat,
      courier: param.kurir,
    })
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;

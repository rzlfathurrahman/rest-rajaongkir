# Cek Ongkir
Website cek ongkos kirim memakai NodeJS dan Express serta API RajaOngkir

## System Requirements
1. NodeJS - V16.x.x
2. NPM - V8.x.x

## How to Install
1. Download / clone this repository to your local machine
```
  git clone https://github.com/zalfaone/rest-rajaongkir.git
```
2. Change directory to `rest-rajaongkir`
```
cd rest-rajaongkir
```
3. Init this project as npm module
```
 npm init -y
```
4. Install all modules on this project, you can see `package.json` for details
```
npm install
```
5. Check this api documentation to get Api Key **(IMPORTANT)**, type this url to your browser
```
https://rajaongkir.com/dokumentasi/starter
(You should choose/set account as starter type) 
```
6. If you have got an api, edit this file `routes/api.js` on line `6`. Change `"ENTER_YOUR_API_KEY_HERE"` to your Api Key
```
5. ....
6. axios.defaults.headers.common["key"] = "ENTER_YOUR_API_KEY_HERE"; // edit this line
7. ....
```
7. Run your website
```
node app
or
nodemon app (if you install nodemon)
```
8. Open your browser go to this url
```
http://127.0.0.1:4000/
```

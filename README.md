
# Mock Json Server for Namaste React Frontend

This repo has a mock json server containing hotel data that can be used in namaste react tutorial instead of depending on a Live API that can change anytime putting a work to updated react components 

- Last updated: 27/08/23 
- Till Namaste react video number: 7 - Finding the path

## Why I created this

- The Swiggy APIs used during tutorial are Live APIs and are constantly changing
- Many students might have faced issue while fetching the data from that APIs
- Here added 20 hotels data hard coded

## Deployment

- Clone this project

- Install deps

```bash
  npm i
```
- Run locally

```bash
  npm start
```
- Mock json will be hosted locally on port 3000
- Use this URL instead Swiggy's URL while using fetch method in the react frontend
- Note: Run it either concurrently with parcel or run it in another shell depending on your pref
## Usage

2 REST endpoints are exposed to call them follow these requests:

- Fetch all
```
localhost:3000/hotels
```

- Fetch based on Id
```
localhost:3000/hotel/:id
```



## Contributing

Contributions are always welcome!

Please create a PR to `main`, avoid updating the mock data and add more routes if need that can be used futher in the course

Thanks


## Authors

- [@aditya1819](https://www.github.com/aditya1819)


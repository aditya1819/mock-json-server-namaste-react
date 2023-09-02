# Mock Json Server for Namaste React Frontend

This repo has a mock json server containing hotel data that can be used in namaste react tutorial instead of depending on a Live API that can change anytime putting a work to updated react components

- Last updated: `03/09/23`
- Till Namaste react video number: `10`

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

After running the application please refer to `localhost:3000` for active endpoints and their use cases

## Contributing

Contributions are always welcome!

Please create a PR to `main`, avoid updating the mock data and add more routes if need that can be used futher in the course

Thanks

## Authors

- [@aditya1819](https://www.github.com/aditya1819)

## Appendix

Common Issues:

- [CORS Extension for Chrome](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- Some images may appear broken,as we are fetching image from cloudinary and image might be updated in cloudinary DB. Use some mock image in that case

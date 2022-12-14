# Fit-Generation

In this project I, Stephen Smith, initiated through Nashville Software School developed this application for my front-end Capestone. 

The goal, in this application build was to provide an individual with health and fitness tools, aswell as the knowledge and ability to generate personalized workout programs based on their unique input criteria, while tracking their personal progress. 

This project was my first solo sprint front-end application, where I created both UI and styling...I also implemented fetched' remote API data, in addition to creating my own local database-API(fit-generation-API) which has its own repo.(link is provided below in the, Running This Application section).

I used Netlify for front-end deployment, and Glitch for my backend server with node.js, previously Heroku before they cancelled the free serving option. I also implimented Cloudinary API for my users saved progress images on their profile page.
<br><b>Deployed Fit-Generation!</b> 
(Pardon our progress...backend functionality under construction.)
<br>visit site: https://fitgeneration.netlify.app/	

## Technologies Used

![](https://user-images.githubusercontent.com/105528673/183157779-a08151c2-07d4-469a-b1bf-fa409416d6ea.png) 
![](https://user-images.githubusercontent.com/105528673/183157835-99e6ec8c-701a-445b-ac72-0e9127112edd.png) 
![](https://user-images.githubusercontent.com/105528673/183157888-59cfa84d-da1f-4adb-acf7-858c87b63a87.png) 
![](https://user-images.githubusercontent.com/105528673/183157933-3a0c3484-a02a-4734-b7a3-d6b1c2904b83.png) 
![](https://user-images.githubusercontent.com/105528673/183157976-5543fa85-504e-41ad-9e00-016e5ca1b7e5.png) 
![](https://user-images.githubusercontent.com/105528673/183158015-89d806bd-2894-46f5-a5cf-e9642f48a8f3.png) 
![](https://user-images.githubusercontent.com/105528673/183158127-8d8c783d-19ad-4213-af19-1f54d91be8cb.png)
![](https://user-images.githubusercontent.com/105528673/183158164-e94a87d3-6bd8-497e-9770-4074141ee75a.png)
![]()

Application GIF below
![](https://github.com/SAS7178/project-gifs/blob/main/public/Fit-Gen%20Gif.gif?raw=true)

## Figma- (Wirefreme)
![](https://github.com/SAS7178/fit-generation/blob/main/images/FigmaWireframe%20FitGen.png?raw=true)

## Lucid Charts(ERD)
![](https://github.com/SAS7178/fit-generation/blob/main/images/Lucid%20ERD.png?raw=true)


## Running This Application Locally (Test-It Out!)

1.First, a note about authentication... This application uses mock authentication which is purely for demonstration purposes. Therefore the login and 
      registration code written here is completely insecure and would never be implemented in a professional application.

            -Clone This Repository And Change To The Directory In The Terminal-
            git clone git@github.com:SAS7178/Fit-Generation.git
            cd Fit-Generation
  
2.Access And Run The Database

            git clone git@github.com:SAS7178/Fit-Generation-API.git
            json-server -p 8088 database.json -w
     
3.Launch the client.

            npm install
            npm start

4.User Login

      stephen@gmail.com

- Fit-Generation-API: https://github.com/SAS7178/Fit-Generation-API  
- Fit-Generation repository: https://github.com/SAS7178/fit-generation
<br>(endpoints currently set to Glitch will need to replace(https://fitgeneration-api.glitch.me/) with https://fitgeneration-api.glitch.me/)

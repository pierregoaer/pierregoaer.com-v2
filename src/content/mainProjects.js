const mainProjects = [
    {
        title: 'Relocation with ChatGPT',
        imageName: 'relocation_with_chatgpt',
        tagline: 'A tool for remote workers.',
        description: "Why stay in the same place when you can travel? Answer a few questions and this <a href=\"https://openai.com/blog/chatgpt\" class=\"text-link\" target=\"_blank\">ChatGPT</a> powered app will tell you where to move, based on your preferences. And using Google's <a href=\"https://developers.google.com/maps/documentation/places/web-service/overview\" class=\"text-link\" target=\"_blank\">Places API</a>, it will show you a picture of your new city.",
        stack: ['Python', 'Gatsby', 'ChatGPT', 'Netlify', 'cPanel'],
        links: [
            {
                type: 'app',
                url: 'https://relocation-chatgpt.netlify.app'
            },
            {
                type: 'code',
                name: 'See API code',
                url: 'https://github.com/pierregoaer/relocation-chatgpt-api'
            },
            {
                type: 'code',
                name: 'See app code',
                url: 'https://github.com/pierregoaer/relocation-chatgpt'
            }
        ]
    },
    {
        title: 'Electrician Nîmes',
        imageName: 'electricien_nimes',
        tagline: 'Portfolio website for an electrician.',
        description: "A complete portfolio website for a French electrician located in Nîmes. The client side is made using <a href=\"https://www.gatsbyjs.com/\" class=\"text-link\" target=\"_blank\">Gatsby</a>. The API that fetches blog articles and handles form submissions is built with <a href=\"https://flask.palletsprojects.com/en/2.2.x/\" class=\"text-link\" target=\"_blank\">Flask</a>. The blog articles are fetched from a <a href=\"https://www.mysql.com/\" class=\"text-link\" target=\"_blank\">MySQL</a> hosted database.",
        stack: ['Python', 'Gatsby', 'MySQL', 'Netlify', 'cPanel'],
        links: [
            {
                type: 'app',
                url: 'https://electricien-nimes.com/'
            },
            {
                type: 'code',
                name: 'See server code',
                url: 'https://github.com/pierregoaer/electricien-nimes-server'
            },
            {
                type: 'code',
                name: 'See client code',
                url: 'https://github.com/pierregoaer/electricien-nimes-client-v2'
            }
        ]
    },
    {
        title: 'My Dog Trainer',
        imageName: 'my_dog_trainer',
        tagline: 'A dog trainer database.',
        description: "A french startup wanted to create a database of dog trainers in the Paris and Lyon area (France). Built as a <a href=\"https://flask.palletsprojects.com/en/2.2.x/\" class=\"text-link\" target=\"_blank\">Flask</a> app using <a href=\"https://docs.gspread.org/en/v5.7.0/\" class=\"text-link\" target=\"_blank\">gspread</a> (a Python API for Google Sheets) to manage the database from a single Google Sheet file and <a href=\"https://leafletjs.com/\" class=\"text-link\" target=\"_blank\">Leaflet</a> to display a map.",
        stack: ['Python', 'Flask', 'JavaScript', 'cPanel'],
        links: [
            {
                type: 'app',
                url: 'https://mon-educateur-canin.com/educateurs'
            },
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/my-dog-trainer'
            }
        ]
    },
    {
        title: 'Advanced Sign-up & Log In',
        imageName: 'advanced_sign_up_log_in',
        tagline: 'A complete and secure user authentication.',
        description: "2-Factor Authentication (with QR code scanning) using <a href=\"https://pyauth.github.io/pyotp/\" class=\"text-link\" target=\"_blank\">PyOTP</a>, email verification via secret token using <a href=\"https://itsdangerous.palletsprojects.com/en/2.1.x/url_safe/\" class=\"text-link\" target=\"_blank\">URL Safe Serialization</a>, form and password validation using <a href=\"https://getbootstrap.com/docs/5.3/forms/validation/\" class=\"text-link\" target=\"_blank\">Bootstrap</a>, password reset and database management using <a href=\"https://www.mysql.com/\" class=\"text-link\" target=\"_blank\">MySQL</a>.",
        stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'cPanel'],
        links: [
            {
                type: 'app',
                url: 'https://pierregoaer.dev/advanced_flask_mysql_sign_up_log_in'
            },
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/advanced_flask_mysql_sign_up_log_in'
            },
        ]
    },
    {
        title: 'Fitness Year in Review',
        imageName: 'streamlit_year_in_review',
        tagline: ' A dashboard to track my progress.',
        description: "Everyday, my workouts are fetched using the <a href=\"https://developers.strava.com/\" class=\"text-link\" target=\"_blank\">Strava API</a> and added to a Google spreadsheet using <a href=\"https://docs.gspread.org/en/v5.7.2/\" class=\"text-link\" target=\"_blank\">Gspread</a>. Using <a href=\"https://pandas.pydata.org/\" class=\"text-link\" target=\"_blank\">Pandas</a> and <a href=\"https://matplotlib.org/\" class=\"text-link\" target=\"_blank\">Matplotlib</a>, I created a <a href=\"https://streamlit.io/\" class=\"text-link\" target=\"_blank\">Streamlit</a> app to turn that spreadsheet into a yearly, monthly and weekly dashboard.",
        stack: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
        links: [
            {
                type: 'app',
                url: 'https://pierregoaer-fitness-year-in-review.streamlit.app/'
            },
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/fitness_year_in_review'
            },
        ]
    },
    {
        title: 'Colour Palette Generator',
        imageName: 'colour_palette_generator',
        tagline: 'Import an image, get a colour palette.',
        description: "Select an image from your device and, using <a href=\"https://pillow.readthedocs.io/en/stable/\" class=\"text-link\" target=\"_blank\">Pillow</a> and <a href=\"https://pypi.org/project/colorgram.py/\" class=\"text-link\" target=\"_blank\">colorgram.py</a>, get a colour palette generated with the most used colours on the image.",
        stack: ['Python', 'Flask', 'JavaScript', 'cPanel'],
        links: [
            {
                type: 'app',
                url: 'https://pierregoaer.dev/colour-palette-generator/'
            },
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/colour-palette-generator'
            },
        ]
    },
    {
        title: 'Flights Tracker',
        imageName: 'flights_sms_alert',
        tagline: 'Save money to travel the world.',
        description: "Using <a href=\"https://www.kiwi.com/ca/\" target=\"_blank\" class=\"text-link\">Tequila by Kiwi</a>, <a href=\"https://sheety.co/\" target=\"_blank\" class=\"text-link\">Sheety</a>, <a href=\"https://developers.google.com/gmail\" target=\"_blank\" class=\"text-link\">Google Gmail</a>, and <a href=\"https://www.twilio.com/docs/usage/api\" target=\"_blank\" class=\"text-link\">Twilio</a>'s API, create a list of destinations and set a price limit for each. You get notified when flights' prices drop below that limit.",
        stack: ['Python', 'Twilio', 'Gmail'],
        links: [
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/Flights_Tracker'
            },
        ]
    },
    {
        title: 'Rain SMS Alert',
        imageName: 'rain_sms_alert',
        tagline: 'Get alerted if it\'s going to rain.',
        description: "Using <a href=\"https://www.twilio.com/docs/usage/api\" target=\"_blank\" class=\"text-link\">Twilio</a> and <a href=\"https://openweathermap.org/api\" target=\"_blank\" class=\"text-link\">OpenWeather</a>'s API, get a text notification in the morning if it's going to rain at your location during the day.",
        stack: ['Python', 'Twilio'],
        links: [
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/rain-sms-alert'
            },
        ]
    },
    {
        title: 'Mapty',
        imageName: 'mapty',
        tagline: 'Track your workouts by location and type of activity.',
        description: "Click on the map (created with <a href=\"https://leafletjs.com/SlavaUkraini/\" class=\"text-link\" target=\"_blank\">Leaflet</a>) to add a new workout to your history and save its location. Select the type of activity you did, enter the details about your workout and it's saved! <br /><span class=\"disclaimer\">** This app is not optimised for mobiles. **</span>",
        stack: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
        links: [
            {
                type: 'app',
                url: 'https://mapty-pierregoaer.netlify.app/'
            },
            {
                type: 'code',
                name: 'See code',
                url: 'https://github.com/pierregoaer/mapty'
            },
        ]
    },
]

export default mainProjects
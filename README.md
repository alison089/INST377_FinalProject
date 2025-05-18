# INST377_FinalProject

# Brew What?

### Your go-to site for indecisive coffee lovers!

We’re two coffee-obsessed girls from the University of Maryland who know the struggle of standing in line, overwhelmed by endless options. With a simple click, we’ll serve up an image of a cup of coffee to inspire your next caffeine fix. Don’t like what you see? Refresh until you find your perfect brew.

**Sip, click, repeat.** Your next favorite drink is waiting!

---

## 🌐 Target Browsers

Our application is built to work across modern web browsers, including:
- **iOS Safari** (latest version)
- **Android Chrome** (latest version)
- **Desktop Browsers**: Chrome, Firefox, Edge, Safari

---

## 📘 Developer Manual  
[Link to Developer Manual Section](#developer-manual)

---

# Developer Manual


## 🛠️ How to Install Brew What?
You can run the site locallly using Live Server in VS Code:
Install the Live Server extension.

Open the project folder.

Right-click index.html > click Open with Live Server.

OR

1. Clone the repository:
   ```bash
   git clone https://github.com/alison089/brew-what.git
   cd brew-what

##🧪 Running Tests
No automated tests are currently implemented. All functionality is verified manually through browser interaction.

Future developers are encouraged to implement unit tests using Jest or browser testing with Cypress.

##📡 API Overview
We utilize a third-party coffee image API to generate random coffee images.

External API (used in main.js)
GET https://coffee.alexflipnote.dev/random.json

Returns: a JSON object containing a URL to a random coffee image.

Example response:

{
  "file": "https://coffee.alexflipnote.dev/KXc99IJ6iRM_coffee.jpg"
}

##🐞 Known Bugs
Image occasionally fails to load if API rate limit is exceeded.

No image caching – reloading quickly may repeat images.

Voice support not yet implemented (future enhancement idea).

##🚧 Roadmap for Future Development
Add favorite/save drink feature (localStorage or backend DB)

Add coffee descriptions or names to each image

Add voice command support using Annyang (e.g., “Show me another!”)

Improve mobile responsiveness and add animations

Add loading spinner while fetching coffee image

Build out user profile feature (track saved drinks, preferences)

#📂 File Structure
brew-what/
├── index.html
├── style.css
├── main.js
└── README.md


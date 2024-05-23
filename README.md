### Project Summary

#### Project Overview
Eco Gym is a web application designed to provide quality workout sessions and highly curated guided meditation sessions. Users can choose from a variety of programs designed by elite trainers, making it a perfect space for self-care and rejuvenation. The application is built using Next.js and Tailwind CSS for optimal performance and modern UI design.

#### Key Features
- **Landing Page**: A welcoming banner with a background video showcasing the essence of the app.
- **Navigation**: Responsive header with navigation links to Home, Workouts, Meditations, and About pages.
- **Thumbnails**: Interactive thumbnails for workout programs and guided meditation sessions, with modals displaying detailed information about each program and trainer.
- **About Page**: Provides information about Eco Gym’s mission, values, and offerings.
- **Footer**: Contains social media links and navigation to key pages.

#### Components
- **Header**: Responsive header with navigation links.
- **Banner**: Section with a background video, welcoming message, and call-to-action button.
- **Thumbnails**: Displays a grid of program thumbnails with brief descriptions and modal pop-ups for more details.
- **Modal**: Shows detailed information about selected programs and trainers.
- **Footer**: Contains additional navigation and social media links.

### Setup Instructions

#### Prerequisites
- Node.js and npm installed on your machine.
- Next.js and Tailwind CSS configured.

#### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/ecogym.git
   cd ecogym
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

#### Running the Development Server
1. Start the server:
   ```sh
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

#### Linting
Run ESLint to check for issues:
```sh
npm run lint
```

### Project Structure
```
/public
  /images
    - logo.png
    - pic01.jpg
    - pic02.jpg
    - pic03.jpg
    - pic04.jpg
    - pic05.jpg
    - pic06.jpg
    - fallback.jpg
  /videos
    - background.mp4

/components
  - Header.js
  - Banner.js
  - Thumbnails.js
  - Modal.js
  - Footer.js

/pages
  - _app.js
  - _document.js
  - index.js
  - about.js
  - workouts.js
  - meditations.js
```

### Features and Implementations

#### Header Component
- Includes navigation links and a responsive menu for mobile views.

#### Banner Component
- Displays a background video with a welcome message and call-to-action button.

#### Thumbnails Component
- Displays program thumbnails with descriptions and a "Learn More" button that opens a modal with more details.

#### Modal Component
- Shows detailed information about the selected program and trainer.

#### Footer Component
- Contains additional navigation links and social media icons.

### Images and Videos
- **Images**: Placeholder images for programs and trainers.
- **Videos**: Background video in MP4 format with a fallback image for unsupported devices.

### Deployment
The application is ready for deployment on platforms like Vercel. Ensure all environment variables and configurations are correctly set up before deploying.

### Contributing
Contributions are welcome! Please fork the repository and submit pull requests.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For any inquiries or support, please contact [yourname@domain.com](mailto:yourname@domain.com).

### Acknowledgments
Special thanks to the design inspiration from [Hyperhuman](https://hyperhuman.cc) and the original template from [Templated](https://templated.co/fullmotion).

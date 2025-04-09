# signup-form
This is a signup form built using next.js and materialUI. 

# 🔥 Expo + Firebase + WebView Integration

This project is a **React Native app using Expo** that integrates **Firebase Authentication** (Google Sign-In) and displays a **Next.js web app** inside a native **WebView**.

## 🚀 Features

- 🔐 Firebase Google Sign-In
- 🌐 WebView to display your deployed Next.js project
- ⚛️ Built with Expo, React Native, and Firebase
- 📲 Ready to run on Android (via Expo Go)

---

## 📸 Demo

| Login Screen | WebView Integration |
|--------------|---------------------|
| ![Login Screen](./assets/login-screen.png) | ![WebView](./assets/webview-screen.png) |

---

## 🛠️ Installation

1. Clone the repo:
   ```bash
   git clone(https://github.com/shashwatrajhack/signup-form.git)
   cd your-repo

   Install dependencies:

bash
npm install
Add your google-services.json file to:

bash
android/app/google-services.json
Update your WebView URL in the code:

tsx
<WebView source={{ uri: '[https://nextjs-webapp-28433.web.app/]' }} />




 
📝 Notes
No need to install Android Studio — just use Expo Go on your phone.

Make sure your web app is deployed via Firebase Hosting.

This setup is perfect for hybrid apps (native + web).

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Charity-Finder

Neflify Link: [https://danielhsu-charityfinder.netlify.app/](https://danielhsu-charityfinder.netlify.app/)

## Table of Contents
[Introduction](#introduction)

[Usage](#usage)

## Introduction
It is a web application that allows users to search for charities, view detailed information about each charity, and save their favorite charities. 

This project is built using React, Typescript & Tailwind CSS and utilizes the Every.org API for data fetching.

## Usage
<img width="1512" alt="Screenshot 2023-10-15 at 10 44 09 PM" src="https://github.com/yukfaihsu/Charity-Finder/assets/108306347/27bed37c-48d5-4efa-b38e-b683a458c4da">
1. This is the Home Page of the web application. It contains a list of charities generated randomly.

##

<img width="1512" alt="Screenshot 2023-10-15 at 10 44 49 PM" src="https://github.com/yukfaihsu/Charity-Finder/assets/108306347/7234497b-d869-4ebf-bee7-bbbc86f4c0b0">
2. Search function is available on the navigation bar. Suggestions will pop up when user starts typing.

##

<img width="1511" alt="Screenshot 2023-10-15 at 10 45 14 PM" src="https://github.com/yukfaihsu/Charity-Finder/assets/108306347/44932775-e0ad-4571-9f2e-55c72c7ddaf9">
3. Search results will be appear after user selects the keyword from the pop up suggestions.

##

![Screenshot 2023-10-15 at 10 58 22 PM](https://github.com/yukfaihsu/Charity-Finder/assets/108306347/51e97932-b296-4578-925f-f2787b1cb154)
![Screenshot 2023-10-15 at 10 58 16 PM](https://github.com/yukfaihsu/Charity-Finder/assets/108306347/199522e1-9cbf-48c2-a51e-132c9fb054dd)
4. The details of the charity will be shown after clicking on the charity from the list. Users can save the charity to "Favorite".

##

![Screenshot 2023-10-15 at 10 56 26 PM](https://github.com/yukfaihsu/Charity-Finder/assets/108306347/f29ea329-6c41-4921-a1e9-c37ebc37761f)
5. User can view all the charities saved in Favorites.

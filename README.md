 # Dynamic PriceCard Component in React

This repository contains a React component named **PriceCard** designed to display pricing information in a clean and organized manner. The component receives an array of pricing objects (`arrObj`) as a prop and dynamically generates individual price cards based on the provided data.

## App Component

### File: App.js

The **App** component serves as the main entry point, importing and rendering the **PriceCard** component. It includes a sample array of pricing objects (`arrObj`) with details such as title, price, user information, and various features with corresponding icons.

### PriceCard Component

#### File: PriceCard.js

The **PriceCard** component is responsible for rendering individual price cards based on the provided `arrObj`. It utilizes the Bootstrap framework for styling and responsiveness.

Each pricing object in the array is mapped to a corresponding card, displaying details like title, price, and a list of features with icons. The presence of features is dynamically controlled using conditional classes, allowing for flexibility in showcasing different plans.

## Styling

Styling is managed through a separate CSS file, **price.css**, imported into the **PriceCard** component. It ensures a consistent and visually appealing layout for the price cards.

## Usage

To use this component, follow these steps:

1. Import the **PriceCard** component into your React application.
2. Create an array of pricing objects (`arrObj`) with the desired plan details.
3. Pass the array as a prop to the **PriceCard** component within your application.

```jsx
import React from 'react';
import PriceCard from './path/to/PriceCard';

const YourComponent = () => {
  const arrObj = [
    // ...your pricing objects
  ];

  return (
    <section className='price p-5'>
      <div className='container'>
        <PriceCard arrObj={arrObj} />
      </div>
    </section>
  );
};

export default YourComponent;
```

Customize the `arrObj` array according to your specific pricing plans and details.

Feel free to enhance or modify the components based on your project requirements.

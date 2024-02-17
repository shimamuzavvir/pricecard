import React from 'react';
import PriceCard from './component/PriceCard';

const App = () => {
  const arrObj = [
    {
      title: "FREE",
      price: "$10/month",
      user: "single user",
      project: "text-muted",
      proIcon: "fa-solid fa-regular fa-x",
      support: "text-muted",
      supIcon: "fa-solid fa-regular fa-x",
      domain: "text-muted",
      domIcon: "fa-solid fa-regular fa-x",
      report: "text-muted",
      repIcon: "fa-solid fa-regular fa-x",

    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 user",
      project: "",
      proIcon: "fa-solid fa-check",
      support: "",
      supIcon: "fa-solid fa-check",
      domain: "",
      domIcon: "fa-solid fa-check",
      report: "text-muted",
      repIcon: "fa-solid fa-regular fa-x",

    },
    {
      title: "PRO",
      price: "$49/month",
      user: "unlimited user",
      project: "",
      proIcon: "fa-solid fa-check",
      support: "",
      supIcon: "fa-solid fa-check",
      domain: "",
      domIcon: "fa-solid fa-check",
      report: "",
      repIcon: "fa-solid fa-check",
    }

  ]

  return (
    <section className='price p-5'>
      <div className='container'>

        <PriceCard arrObj={arrObj} />



      </div>
    </section>


  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Person = ({img, name, job}) => {
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return(
    <article className="person">
      <img src = {url} alt = ""/>
      <h4>{name}</h4>
      <h4>{job}</h4>
    </article>
  )
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="35" name="Eric B." job="Financial Advisor" />
      <Person img="22" name="Robert C." job="English Instructor" />
      <Person img="35" name="Mark P." job="Fabrication Foreman" />
    </section>
  )
};

ReactDOM.render(
  <PersonList />,
  document.getElementById("root")
);

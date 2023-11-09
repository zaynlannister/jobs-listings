import Header from "./components/Header/Header";
import VacancyList from "./components/Vacancy/VacancyList";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <VacancyList />
      </div>
    </>
  );
};

export default App;

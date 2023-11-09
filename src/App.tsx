import FilterComponent from "./components/FilterContainer/FilterComponent";
import Header from "./components/Header/Header";
import VacancyList from "./components/Vacancy/VacancyList";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <FilterComponent />
      </div>
      <div className="container">
        <VacancyList />
      </div>
    </div>
  );
};

export default App;

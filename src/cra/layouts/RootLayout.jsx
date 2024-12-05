import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import SearchPage from "../pages/SearchPage";

const RootLayout = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  return (
    <div className="[root-layout] layout">
      <Header />
      {showSearch ? (
        <SearchPage />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default RootLayout;

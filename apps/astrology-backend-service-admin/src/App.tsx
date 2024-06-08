import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ZodiacSignList } from "./zodiacSign/ZodiacSignList";
import { ZodiacSignCreate } from "./zodiacSign/ZodiacSignCreate";
import { ZodiacSignEdit } from "./zodiacSign/ZodiacSignEdit";
import { ZodiacSignShow } from "./zodiacSign/ZodiacSignShow";
import { HoroscopeList } from "./horoscope/HoroscopeList";
import { HoroscopeCreate } from "./horoscope/HoroscopeCreate";
import { HoroscopeEdit } from "./horoscope/HoroscopeEdit";
import { HoroscopeShow } from "./horoscope/HoroscopeShow";
import { CompatibilityList } from "./compatibility/CompatibilityList";
import { CompatibilityCreate } from "./compatibility/CompatibilityCreate";
import { CompatibilityEdit } from "./compatibility/CompatibilityEdit";
import { CompatibilityShow } from "./compatibility/CompatibilityShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AstrologyBackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ZodiacSign"
          list={ZodiacSignList}
          edit={ZodiacSignEdit}
          create={ZodiacSignCreate}
          show={ZodiacSignShow}
        />
        <Resource
          name="Horoscope"
          list={HoroscopeList}
          edit={HoroscopeEdit}
          create={HoroscopeCreate}
          show={HoroscopeShow}
        />
        <Resource
          name="Compatibility"
          list={CompatibilityList}
          edit={CompatibilityEdit}
          create={CompatibilityCreate}
          show={CompatibilityShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Sub, SubsResponseFromApi } from "./types";
import axios from "axios";

interface AppState {
  subs: Array<Sub>;
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSubs = async (): Promise<SubsResponseFromApi> => {
      //esta url es para localhost.
      return await axios
        .get("http://localhost:3001/subs")
        .then((response) => response.data);
    };
    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description,
        } = subFromApi;
        return {
          nick,
          description,
          avatar,
          subMonths,
        };
      });
    };
    fetchSubs().then((apiSubs) => {
      const subs = mapFromApiToSubs(apiSubs);
      setSubs(subs);
    });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} />
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;

import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { darkTheme } from "./theme";
import { useImmer } from "use-immer";

import { useEffect, useState } from "react";

import {
  getAllGroupTests,
  getAllQuestions,
  getAllTests,
} from "../components/services/allServices";
import MyContext from "../context/";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
  const [groupTests, setGroupTests] = useImmer([]);
  const [tests, setTests] = useImmer([]);
  const [testQuestions, setTestQuestions] = useImmer([]);
  
  const [indexDataTests, setIndexDataTests] = useState(0);
  const [indexDataGroupTests, setIndexDataGroupTests] = useState(0);
  const [indexDataQuestion, setIndexDataQuestion] = useState(0);
  console.log("index main", indexDataGroupTests);
  console.log("groupTests", groupTests);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: groupTestsData } = await getAllGroupTests();
        const { data: testsData } = await getAllTests();
        const { data: testQuestionsData } = await getAllQuestions();

        setGroupTests(groupTestsData);
        setTests(testsData);
        setTestQuestions(testQuestionsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        groupTests,
        setGroupTests,
        tests,
        setTests,
        testQuestions,
        setTestQuestions,
        indexDataTests,
        setIndexDataTests,
        indexDataGroupTests,
        setIndexDataGroupTests,
        indexDataQuestion ,
        setIndexDataQuestion
      }}
    >
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </CacheProvider>
    </MyContext.Provider>
  );
};

export default MainLayout;

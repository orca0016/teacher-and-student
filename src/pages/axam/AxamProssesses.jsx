import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CountdownTimer from "../../components/CountdownTimer";
import MyContext from "../../context";

const QuizApp = ({ paramsId, testQuestions, tests }) => {
  console.log(paramsId);
  const questions = [
    {
      title: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 1",
    },
    {
      title: "Question 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 2",
    },
    {
      title: "Question 3",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 3",
    },
    {
      title: "Question 4",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 4",
    },
    {
      title: "Question 5",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 2",
    },
    // More questions can be added here
  ];
  const [indexExam, setIndexExam] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [startTime, setStartTime] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const navigat = useNavigate();

  // Function to shuffle the options
  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle options for the current question
  useEffect(() => {
    setShuffledOptions(
      shuffleArray(testQuestions[currentQuestionIndex].options)
    );
  }, [currentQuestionIndex]); // Dependency array includes only currentQuestionIndex

  const handleAnswerOptionClick = (option) => {
    if (option === testQuestions[currentQuestionIndex].trueQuestion) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < testQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
      setStartTime((prev)=> !prev);
    }
  };

  useEffect(() => {
   if (showScore) {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        // بررسی اگر تایمر به صفر رسید، clearInterval را فراخوانی کنید
        if (prevTimer === 0) {
          clearInterval(countdown);
          // انجام کار مورد نظر
          console.log('تایمر به اتمام رسید. انجام کار...');
          navigat("/exam") 
        }

        // در غیر اینصورت تایمر را به‌روز کنید
        return prevTimer - 1;
      });
    }, 1000);

    // برای پاک کردن تابع setInterval هنگام از بین رفتن کامپوننت
    return () => clearInterval(countdown);
   }
  }, [startTime]); 

  return (
    <div>
      {showScore ? (
        <Box className="m-auto text-center flex  justify-center flex-col h-[70vh]  overflow-hidden">
          <Typography variant="h4" className="fadeInExamScore">
            امتیاز شما : {score} از {testQuestions.length} سوال
          </Typography>
          <Typography  className="fadeInExamScore">
          شما در { timer} ثانیه دیگر به صفحه ازمون منتقل میشوید
          </Typography>
        </Box>
      ) : (
        <div className="pr-6">
          <Typography variant="h3" style={{ mb: "30px" }}>
            {" "}
            {testQuestions[currentQuestionIndex].nameQuestion}
          </Typography>
          {shuffledOptions.map((option, index) => (
            <Box className="mt-6" key={index}>
              <Button onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </Button>
            </Box> 
          ))}
          <br />

          <Box className="w-full h-20 mt-32  flex align-middle justify-between p-5">
            <Button
              variant="outlined"
              className=""
              disabled={currentQuestionIndex === testQuestions.length - 1}
              onClick={() => {
                indexExam <= testQuestions.length
                  ? setIndexExam(indexExam + 1)
                  : setIndexExam(indexExam);
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              }}
            >
              سوال بعدی
            </Button>
            <Button
              variant="outlined"
              className=""
              disabled={currentQuestionIndex === 0}
              onClick={() => {
                setIndexExam(indexExam - 1);
                setCurrentQuestionIndex(currentQuestionIndex - 1);
              }}
            >
              سوال قبلی
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

const AxamProssesses = () => {
  const [checked, setChecked] = useState(false);
  const [start, setStart] = useState(true);
  const [arrayExamoriginals, setArrayExamoriginals] = useState();
  const [timerStarted, setTimerStarted] = useState(false);
  const params = useParams();

  const { tests, testQuestions } = useContext(MyContext);
  const inObjects = tests.find((test) => test.id === parseInt(params.testId));

  useEffect(() => {
    if (inObjects && inObjects.nameTest) {
      const arrayExamoriginals = testQuestions.filter(
        (question) => question.nameCategory === inObjects.nameTest
      );
      setArrayExamoriginals(arrayExamoriginals);
    } else {
      console.error("Could not find the test or its nameTest property.");
    }
  }, []);

  const handleStartTimer = () => {
    setTimerStarted(true);
  };
  useEffect(() => {
    setChecked((prev) => !prev);

    return () => {
      setChecked((prev) => !prev);
    };
  }, []);
  const inObject =
    tests.filter((test) => test.id === parseInt(params.testId)) ;
  return (
    <>
      <Box className=" absolute left-10 top-10  ">
        <Zoom in={checked} style={{ transitionDelay: checked ? 500 : "0ms" }}>
          <Link to="/exam">
            <Button variant="contained" className="bg-[#8D14E5] ">
              انصراف
            </Button>
          </Link>
        </Zoom>
      </Box>

      <Grid container sx={{ width: "100%", height: "100vh" }}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Box className="w-full h-full bg-[#8D14E5] text-white font-medium shadow-2xl p-9">
            <Typography gutterBottom className="text-justify">
              این آزمون {inObject[0].timeTest|| ""} دقیقه زمان داره و شما فقط یک بار
              میتونید هر سوال رو جواب بدید پس دقت کنید که گزینه ای که انتخاب
              میکنید درست باشه .
            </Typography>
            <Typography gutterBottom className="text-justify">
              وقتی اماده بودی روی دکمه شروع ازمون کلیک کن . تو ی نوار پایین هم
              می تونی ببینی چقدر زمان دیگه باقی مونده .
            </Typography>
            <Typography gutterBottom className="text-justify">
              همچنین گزینه درستت رو میتونی با کلیک کردن روی گزینش انتخاب کنی و
              بعد دکمه گزینه سوال بعدی رو بزنی این رو هم بگم میتونی به سوال های
              قبلی برگردی و دوباره برسیشون کنی در آّخر میتونی در بخش داشبورد
              عملکرد خودت رو ببینی
            </Typography>
            <Typography className="text-justify">موفق باشی {": )"}</Typography>

            <Box className="w-full  justify-center flex mt-[100px]">
              <Button
                variant="contained"
                sx={{ color: "black" }}
                color="success"
                disabled={!start}
                size="large"
                onClick={() => {
                  setStart((prev)=> !prev);
                  setTimerStarted(true);
                }}
              >
                شروع آزمون
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          xl={8}
          className={start ? "back-page-axam" : ""}
        >
          <Box sx={{ bgColor: "#39fa8a" }} className="w-full ">
            <Alert
              variant="outlined"
              severity="warning"
              className="w-[40%] m-8"
            >
              <CountdownTimer
                initialMinutes={inObject[0].timeTest}
                startTimer={timerStarted}
              />
            </Alert>
          </Box>
          {start ? null : (
            <QuizApp
              paramsId={params}
              testQuestions={arrayExamoriginals}
              tests={tests}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default AxamProssesses;

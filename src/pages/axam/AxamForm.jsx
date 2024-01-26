function shuffleArray(array) {
    // ایجاد یک کپی از آرایه
    const shuffledArray = array.slice();
  
    // الگوریتم تصادفی کردن (Fisher-Yates algorithm)
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    return shuffledArray;
  }
  
  const questions = [
    {
      "nameQuestion": "چند ساعت در طول شبانه روز داریم؟",
      "nameCategory": "اطلاعات عمومی",
      "number1": "۱ ساعت",
      "number2": "۳۰ساعت",
      "number3": "۸۵ ساعت",
      "number4": "۲۴ساعت",
      "trueQuestion": "number3",
      "id": 3
    },
    {
      "nameQuestion": "test1",
      "nameCategory": "ریاضی",
      "number1": "test11",
      "number2": "test21",
      "number3": "test31",
      "number4": "test41",
      "trueQuestion": "number4",
      "id": 4
    },
    {
      "nameQuestion": "چطور میتوان خوب بود",
      "nameCategory": "تست روان شناسی",
      "number1": "خوب بود",
      "number2": "بد بود",
      "number3": "راضی بود",
      "number4": "عصبانی بود",
      "trueQuestion": "number1",
      "id": 5
    }
  ];
  const AxamForm = () => {
    return (
      
      <>
      {randomOptions}
      </>
    )
  }
  
  export default AxamForm  
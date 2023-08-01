function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }

  const wrapAdjective = (star = "*") => (adjective = "dedicated")  => {
    return `You are ${star}${adjective}${star}!`;
  }
  

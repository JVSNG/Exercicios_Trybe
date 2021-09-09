function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dayList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index++){
        const currentDay = dezDaysList[index];
        const dayListItem = document.createElement('li');
        dayListItem.classList.add('day');
        dayListItem.innerHTML = currentDay;
        switch(currentDay){
            case 24:
            case 31:
                dayListItem.classList.add('holiday');
                break;
            case 4:
            case 11:
            case 18:
                dayListItem.classList.add('friday');
            break;
            case 25:
                dayListItem.classList.add('holiday');
                dayListItem.classList.add('friday');
                break;
        }
        dayList.appendChild(dayListItem);
    }
  }

  createDaysOfTheWeek();
  createDaysOfTheMonth();
  
  
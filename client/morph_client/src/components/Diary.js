import React, { useEffect, useState } from 'react';

import {
  
  TimelineMonth,
  Day,
  Week,
  WorkWeek,
  Month,
  Print,
  TimelineViews,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';

//value of render count persist till refresh page
let renderCount = 1;

let count = 4;
const _ownerData = [
  { OwnerText: 'Provider', Id: 1, OwnerColor: '#ffaa00' },
];
const _scheduleData = [
  {
    Id: 1,
    StartTime: new Date(2022, 0, 3),
    EndTime: new Date(2022, 0, 3),
    OwnerId: 1
  }
];
function Schedule({appointmentsData}) {
  useEffect(() => {
    renderCount++;
  });
  const [ownerData, setOwnerData] = useState(_ownerData);
  const [scheduleData, setScheduleData] = useState(_scheduleData);
  const [somestate, setSomestate] = useState(1);
  const [data, setData] = useState([]);

  function handleClick() {
    setSomestate(somestate + 1);
    addOwnerData();
  }
  function handleResourceClick() {
    addResourceData();
  }
  const formatter =(data)=>{
    let elements = data.split("/").reverse()

    const newArray = elements.map((element=>{
        if(element.length==2 && element[0]==0){
          
         return  element.substring(1)
        }
        else{return element}
    })) 
    return newArray.join()
 }
  
  const rows = appointmentsData.map(appointment=>{
  
    return{
        id:appointment.id,
        StartTime: new Date(formatter(appointment.date)),
        EndTime: new Date(formatter(appointment.date)),
        OwnerId: 1
        }
    })
  
  const addResourceData = () => {
    console.log(rows)
    let data = rows
    setScheduleData(scheduleData.concat(data));
  };
  const addOwnerData = () => {
    setOwnerData(
      ownerData.concat({ OwnerText: 'Nancy', Id: count, OwnerColor: '#ffaa00' })
    );
    count++;
  };

  console.log('render ', data);
  return (
    <>
      <button onClick={() => handleResourceClick()}>
        Click me to add datasource to Schedule
      </button>
      <button onClick={() => handleClick()}>
        Click me to add new Resource {somestate}
      </button>
    
      <ScheduleComponent
        width="100%"
        height="550px"
        selectedDate={new Date(2022, 0, 3)}
        eventSettings={{
          dataSource: scheduleData,
          fields: {
            subject: { title: 'Subject', name: 'Subject' },
            location: { title: 'Location', name: 'Location' },
            note: { title: 'Note', name: 'Description' },
            startTime: { title: 'Departure Time', name: 'StartTime' },
            endTime: { title: 'Arrival Time', name: 'EndTime' }
          },
          allowAdding: true,
          enableTooltip: true
        }}
        firstDayOfWeek={1}
        group={{
          byDate: false,
          resources: ['Owners'],
          enableCompactView: false
        }}
        currentView="TimelineDay"
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" />
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="WorkWeek" />
          <ViewDirective option="Month" />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="OwnerId"
            title="Owner"
            name="Owners"
            allowMultiple={true}
            dataSource={ownerData || []}
            textField="OwnerText"
            idField="Id"
            colorField="OwnerColor"
          />
        </ResourcesDirective>
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            TimelineViews,
            TimelineMonth,
            DragAndDrop,
            Resize,
            Print
          ]}
        />
      </ScheduleComponent>
    </>
  );
}
export default Schedule;

import CalendarMonthView from "react-calendar-month-view";

class Dance {
  constructor(title, artist, link) {
    this.title = title;
    this.artist = artist;
    this.link = link;
  }
}

class DanceClass {
  constructor(title, instructor, description, price, date, dance, signup_form_url) {
    this.title = title;
    this.instructor = instructor;
    this.description = description;
    this.price = price;
    this.date = date
    this.dance = dance
    this.signup_form_url = signup_form_url
  }
}

// For V1, every new dance class will require a code deploy. In the future, this will be replaced with a fetch call to an application where we can grab this from a datastore.
// Edit this constant for now in order to add/remove dance classes
// Note that the timestamp on the date needs to be T05:00:00.000Z
const DANCE_CLASSES = [
  new DanceClass(
    '1-2 Basic Jazz Class',
    'Lingyun Yi',
    'Basic introduction class to Jazz style Dancing! Perfect for students new to dancing in general or new to the Jazz style!',
    40.00,
    '2022-02-17T05:00:00.000Z',
    new Dance(
      'Jazz Hands',
      'Me',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    )
  ),
  new DanceClass(
    'Pop',
    'Lingyun Yi',
    'Pop with your girl Britney',
    40.00,
    '2022-02-20T05:00:00.000Z',
    new Dance(
      '...Baby One More Time',
      'Britney Spears',
      'https://www.youtube.com/watch?v=C-u5WLJ9Yk4'
    )
  ),
  new DanceClass(
    'Hip Hop',
    'Instructor with a very long name',
    'Hip Hop class',
    25.00,
    '2022-02-24T05:00:00.000Z',
    new Dance(
      'UR so f**king cool',
      'Tones and I',
      'https://www.youtube.com/watch?v=N6GLTz0_rCA'
    )
  ),
  new DanceClass(
    'Super long dance class title to try to break things',
    'Instructor 3',
    'Super long description. Super long description. Super long description. Super long description. Super long description. Super long description. Super long description.',
    20.00,
    '2022-02-27T05:00:00.000Z',
    new Dance(
      'Nyan Cat',
      'Meow',
      'https://www.youtube.com/watch?v=QH2-TGUlwu4'
    )
  )
]

const getDanceClassesKeyedByDate = (danceClasses) => {
  const danceClassesKeyedByDate = {}
  danceClasses.forEach(danceClass => {
    danceClassesKeyedByDate[danceClass.date] = danceClass
  });
  return danceClassesKeyedByDate
}

const Class = (props) => {
  const danceClassesKeyedByDate = getDanceClassesKeyedByDate(DANCE_CLASSES)
  const renderDay = (day) => {
    const danceClass = danceClassesKeyedByDate[day]
    if (danceClass) {
      return (
        <div className='dance-class'>
          <p>{danceClass.title} with {danceClass.instructor}</p>
        </div>
      )
    } 
    return ;
  }

  return (
    <div className='class'>
      <CalendarMonthView renderDay={renderDay} activeDayStyle={{'background-color': '#4DD0E1'}} />
    </div>
  );
};

export default Class
const PROFILE = [
  'Name',
  'Address',
  'BirthDay',
  'Skill'
];


export const Top = () => {
  return (
    <div>
      {
        PROFILE.map((prof,index) => {
          return <div key={index}>{prof}</div>
        })
      }
    </div>
  )
}

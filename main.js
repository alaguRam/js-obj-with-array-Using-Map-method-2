


const travel = [
  {
    first_name: 'Mike',
    location: 'London'
  },
  {
    first_name: 'Tim',
    location: 'US'
  },
  {
    first_name: 'John',
    location: 'Australia'
  }
];

let c=travel.map(function(ma){
	return`${ma.first_name} lives in ${ma.location}`;
});
console.log(c);
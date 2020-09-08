const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Ilorin KW',
    image: 'https://randomuser.me/api/portraits/men/23.jpg'
  },
  {
    name: 'Katy Johnson',
    age: 22,
    gender: 'female',
    lookingFor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/female/82.jpg'
  },
  {
    name: 'Aboi Ahmad',
    age: 29,
    gender: 'male',
    lookingFor: 'female',
    location: 'Offa KW',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Display Next Profile
function nextProfile(){
  const currentProfile = profiles.next().value;

  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group>
      <li class="list-group-item"> Name: ${currentProfile.name} </li>
      <li class="list-group-item"> Age: ${currentProfile.age} </li>
      <li class="list-group-item"> Location: ${currentProfile.location} </li>
      <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor} </li>
    </ul>
  `;

  document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
  `;
}

// Profile Iterator
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function(){
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false } : 
      {done: true}
    }
  };
};
const profilePicture = document.getElementById('profile-picture');
const nameProfile = document.getElementById('name-profile-sidebar');
const firstNameProfile = document.getElementById('name-profile');
const lastNameProfile = document.getElementById('lastname-profile');
const email = document.getElementById('email-conteiner');
const userNumber = document.getElementById('number-profile');
const userAge = document.getElementById('age-profile');
const urlP = document.getElementById('url-comunity-conteiner');
const profileTitle = document.getElementById('profile-title');
const profileTitle1 = document.getElementById('profile-title-01');
const profileTitle2 = document.getElementById('profile-title-02');
const profileTitle3 = document.getElementById('profile-title-03');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const btnEditProfile = document.getElementById('bottun-edit-profile');
const userData = JSON.parse(localStorage.getItem('userInfo'));

function fillInfos() {
  nameProfile.innerHTML = userData[0].name+' '+userData[0].lastName
  email.innerHTML = `<p>${userData[0].email}</p>`
   
  
  firstNameProfile.placeholder = userData[0].name
  lastNameProfile.placeholder = userData[0].lastName
  userNumber.placeholder = userData[0].number
}

fillInfos()

let user = {
  registerAge: { age: "UserAge" },
  registerUrlp: { urlp: "userUrlProfile" },
  registerTitle: {
    title: 'Administrador',
    imageTitle: 'imagens/grown_adm.png',
  },
  registerTitle1: {
    title1: 'Monitor',
    imageTitle1: 'imagens/sunglass_monitor.png',
  },
  registerTitle2: { title2: 'Especialista' },
  registerTitle3: { title3: '' },
  registerPicture: { picture: 'imagens/picture-profile.jpg' },
  registerFollowers: { followers: 0 },
  registerFollowing: { following: 0 },
}; 

function fixInfos() {
  profilePicture.style.backgroundImage = `url(${user.registerPicture.picture})`;

  profileTitle.innerHTML = `<p><img style ="width: 0.8rem;"  src="${user.registerTitle.imageTitle}" alt=""> ${user.registerTitle.title}</p>`;
  profileTitle1.innerHTML = `<p><img style ="" src="${user.registerTitle1.imageTitle1}">${user.registerTitle1.title1}</p>`;
  profileTitle2.innerHTML = `<p><i class="bi bi-star-fill"></i> ${user.registerTitle2.title2}</p>`;

  urlP.innerHTML = `<a href="perfil.html">${user.registerUrlp.urlp}</a>`;

  followers.innerHTML += user.registerFollowers.followers;
  following.innerHTML += user.registerFollowing.following;

  userAge.placeholder = user.registerAge.age

}

fixInfos()


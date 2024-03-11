const btnBackToProfileFromEditProfilePage = document.getElementById('btn-back-page');

function backToProfileFromEditProfilePage() {
  location.href = '../perfil.html'
}

btnBackToProfileFromEditProfilePage.addEventListener('click', backToProfileFromEditProfilePage)

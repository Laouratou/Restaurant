<template>
  
  <div class="row">
    <div class="col-6">
      <h1 class="custom-title mt-4 ">Ajouter Enseignant</h1>
    </div>
    <div class="col-6 pt-5 ">
      <div class="row container">
        <div class="col-6">
          <div class="d-flex ">
            <!-- Boutons "Précédent" et "Suivant" -->
            <button class="btn btn-primary custom-btn rounded-pill px-4 mr-2">
              <i class="fas fa-arrow-left"></i> Précédent <i class="fas fa-arrow-right"></i>
            </button>
            <button class="btn btn-primary custom-btn rounded-pill px-4">
              Suivant <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div class="col-6">
          <!-- Boutons avec espacement horizontal -->
          <div class="d-flex  ">
            <button class="btn btn-outline-secondary custom-btn rounded-pill px-4 mr-2">
              <i class="fas fa-times "></i> Annuler
            </button>
            <button class="btn btn-outline-danger custom-btn rounded-pill px-4 mr-2">
              <i class="fas fa-trash-alt "></i> Supprimer
            </button>
            <button class="btn btn-outline-success custom-btn rounded-pill px-4 mr-2">
              <i class="fas fa-plus "></i> Ajouter
            </button>
            <button class="btn btn-primary custom-btn rounded-pill px-4 mr-2">
              <i class="fas fa-check "></i> Valider
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>


  <h5 class="ml-3 mt-1">Recherche par: </h5>
  <div class="container ">
    <div class="row">
      <div class="col-md-4">
        <div class="form-group custom-form-group">
          <label for="matriculeSelect" class="custom-label">N° Matricule:</label>
          <select class="form-select custom-select" id="matriculeSelect" style="background-color: rgb(100,900,142);">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group custom-form-group " >
          <label for="nomSelect" class="custom-label">Nom:</label>
          <select class="form-select custom-select" id="nomSelect"  style="background-color: rgb(100,900,142);">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
      <div class="col-md-4 d-flex align-items-center">
        <div class="form-check form-switch custom-checkbox">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">Tout</label>
        </div>
        <button class="btn btn-success timezone-button">Fuseau horaire</button>
      </div>
    </div>
  </div>
  <div class="py-4">
    <div class="row">
      <div class="col-md-6 ">
        <form class="p-4 rounded form-container mx-auto" style="width: 55rem; margin-left: -50px;">
          <h2 class="mb-4 text-center">Etat civil et Adresses</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="row mb-3">
                <label for="champ1"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-card-text mr-2"></i>
                  <span class="d-none d-md-inline">Numero</span>
                </label>
                <input type="text" class="form-control w-50 ml-2" id="champ1">
              </div>

              <div class="row mb-3">
                <label for="champ2"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-person mr-2"></i>
                  <span class="d-none d-md-inline" >Nom</span>
                </label>
                <input type="text" class="form-control ml-2 w-50" id="champ2">
              </div>

              <div class="row mb-3">
                <label for="champ3"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-person mr-2"></i>
                  <span class="d-none d-md-inline">Prenom</span>
                </label>
                <input type="text" class="form-control w-50 ml-2" id="champ3">
              </div>

              <div class="row mb-3">
                <label for="champ4"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-calendar"></i>
                  <span class="d-none d-md-inline ">Date naissance</span>
                </label>
                <input type="date" class="form-control w-50 ml-2" id="champ4">
              </div>


            </div>
            <div class="col-md-6">
              <div class="row mb-3">
                <label for="champ5"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-geo-alt mr-2"></i>
                  <span class="d-none d-md-inline">Lieu naissance</span>
                </label>
                <input type="text" class="form-control w-50 ml-2" id="champ5">
              </div>


              <div class="row mb-3">
                <label for="champ6"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-gender"></i>
                  <span class="d-none d-md-inline">Sexe</span>
                </label>
                <select class="form-select w-50 ml-2 rounded-pill" id="champ6">
                  <option value="">Choisir le sexe</option>
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>



              <div class="row mb-3">
                <label for="champ7"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-person-check"></i>
                  <span class="d-none d-md-inline">Titre</span>
                </label>
                <input type="text" class="form-control w-50 ml-2" id="champ7">
              </div>

              <div class="row mb-3">
                <label for="champ8"
                  class="col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-geo-alt mr-2"></i>
                  <span class="d-none d-md-inline">Specialites</span>
                </label>
                <input type="text" class="form-control w-50 ml-2" id="champ8">
              </div>

            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">Soumettre</button>
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <form class="shadow p-4 rounded " style="">
          <h2 class="mb-4 text-center">Contacts</h2>
          <div class="row mb-3">
            <label for="champ7" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center">
              <i class="bi bi-person-check"></i> Telephone
            </label>
            <input type="text" class="form-control w-50 ml-2" id="champ7">
          </div>

          <div class="row mb-3">
            <label for="champ7" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center">
              <i class="bi bi-person-check"></i> Email
            </label>
            <input type="text" class="form-control w-50 ml-2" id="champ7">
          </div>
          <div class="row mb-3">
            <label for="champ7" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center">
              <i class="bi bi-person-check"></i> Modifier
            </label>
            <input type="text" class="form-control w-50 ml-2" id="champ7">
          </div>
          <div class="text-center">
            <div class="text-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault"
                  style="font-weight: bold; color: #333;">Modifier</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-2">
        <div class="card" style="width: 14rem;height: 16rem;">
          <img src="#" class="card-img-top" alt="" id="imagePreview">
        </div>
        <label for="fileInput" class="btn btn-primary" style="width: 225px;">Insérer</label>
        <input type="file" id="fileInput" style="display: none;" accept="image/*" onchange="previewImage(event)">

      </div>
    </div>
  </div>
  <h5 class="text-primary py-4 ml-4">Repartition horaire</h5>

  <div class="container mt-4">
    <div class="row">
        <div class="col-12">
            <table class="table table-striped table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" style="width: 10%;">Jour</th>
                        <th scope="col" style="width: 10%;">H début</th>
                        <th scope="col" style="width: 10%;">H fin</th>
                        <th scope="col" style="width: 10%;">Durée</th>
                        <th scope="col" style="width: 30%;">Matière</th>
                        <th scope="col" style="width: 10%;">Classe</th>
                        <th scope="col" style="width: 10%;">Année scolaire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lundi</td>
                        <td>8:00</td>
                        <td>10:00</td>
                        <td>2 heures</td>
                        <td>Mathématiques</td>
                        <td>Classe A</td>
                        <td>2023-2024</td>
                    </tr>
                    <tr>
                        <td>Mardi</td>
                        <td>9:30</td>
                        <td>11:30</td>
                        <td>2 heures</td>
                        <td>Histoire</td>
                        <td>Classe B</td>
                        <td>2023-2024</td>
                    </tr>
                    <tr>
                        <td>Mercredi</td>
                        <td>10:00</td>
                        <td>12:00</td>
                        <td>2 heures</td>
                        <td>Science</td>
                        <td>Classe C</td>
                        <td>2023-2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

</template>

<script>
export default {
  // Composant Vue.js
};// Ton code JavaScript ici, si nécessaire
</script>

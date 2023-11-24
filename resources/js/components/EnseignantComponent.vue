<template>
  <div class="container mt-4">
    <div class="row align-items-center">
        <div class="col-lg-3">
            <!-- Titre -->
            <h1 class="custom-title mt-4">Ajouter Enseignant</h1>
        </div>
        <div class="col-lg-9">
            <!-- Boutons -->
            <div class="d-flex flex-wrap flex-lg-nowrap justify-content-lg-end border border-primary h-200">
                <div class="mb-2 mb-lg-0 me-2">
                    <button class="btn btn-primary rounded-pill">
                        <i class="fas fa-arrow-left me-2"></i> Précédent
                    </button>
                </div>
                <div class="mb-2 mb-lg-0 me-2">
                    <button class="btn btn-primary rounded-pill">
                        Suivant <i class="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>
                <div class="mb-2 mb-lg-0 me-2">
                    <button class="btn btn-outline-secondary rounded-pill">Annuler</button>
                </div>
                <div class="mb-2 mb-lg-0 me-2">
                    <button class="btn btn-outline-danger rounded-pill">Supprimer</button>
                </div>
                <div class="mb-2 mb-lg-0 me-2">
                    <button class="btn btn-outline-success rounded-pill">Ajouter</button>
                </div>
                <div>
                    <button class="btn btn-primary rounded-pill">Valider</button>
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
            <select class="form-select custom-select" id="nomSelect" style="background-color: rgb(100,900,142);">
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
    <div class="container py-4">
  <form class="p-4 rounded form-container mx-auto" style="max-width: 55rem;">
    <h2 class="mb-4 text-center">Etat civil et Adresses</h2>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="champ1" class="form-label">Numero</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-card-text"></i></span>
          <input type="text" class="form-control" id="champ1">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ2" class="form-label">Nom</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-person"></i></span>
          <input type="text" class="form-control" id="champ2">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ3" class="form-label">Prenom</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-person"></i></span>
          <input type="text" class="form-control" id="champ3">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ4" class="form-label">Date naissance</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-calendar"></i></span>
          <input type="date" class="form-control" id="champ4">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ5" class="form-label">Lieu naissance</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-geo-alt"></i></span>
          <input type="text" class="form-control" id="champ5">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ6" class="form-label">Sexe</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-gender"></i></span>
          <select class="form-select rounded-pill" id="champ6">
            <option value="">Choisir le sexe</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ7" class="form-label">Titre</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-person-check"></i></span>
          <input type="text" class="form-control" id="champ7">
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label for="champ8" class="form-label">Specialites</label>
        <div class="input-group">
          <span class="input-group-text"><i class="bi bi-geo-alt"></i></span>
          <input type="text" class="form-control" id="champ8">
        </div>
      </div>
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary">Soumettre</button>
    </div>
  </form>
</div>

  <div class="col-md-6">
    <form class="shadow p-4 rounded">
        <h2 class="mb-4 text-center">Contacts</h2>
        <div class="mb-3 d-flex align-items-center">
            <label for="telephone" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2">
                <i class="bi bi-person-check"></i> Téléphone
            </label>
            <input type="text" class="form-control flex-grow-1 ml-2" id="telephone">
        </div>

        <div class="mb-3 d-flex align-items-center">
            <label for="email" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2">
                <i class="bi bi-person-check"></i> Email
            </label>
            <input type="text" class="form-control flex-grow-1 ml-2" id="email">
        </div>
        
        <div class="mb-3 d-flex align-items-center">
            <label for="modifier" class="col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2">
                <i class="bi bi-person-check"></i> Modifier
            </label>
            <input type="text" class="form-control flex-grow-1 ml-2" id="modifier">
        </div>
        
        <div class="text-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault" style="font-weight: bold; color: #333;">
                    Modifier
                </label>
            </div>
        </div>
    </form>
</div>

        <div class="col-md-12 mt-3">
      <div class="card" style="width: 100%;">
        <img src="#" class="card-img-top" alt="" id="imagePreview">
          </div>
      <label for="fileInput" class="btn btn-primary" style="width: 225px;">Insérer</label>
      <input type="file" id="fileInput" style="display: none;" accept="image/*" onchange="previewImage(event)">
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

  </script>
  
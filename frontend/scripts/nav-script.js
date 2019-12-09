function loadNav() {
    let jwt = localStorage.getItem("jwt");
    if (jwt == "out") {
    $('body').prepend(`
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-unc fixed-top">
      <a class="navbar-brand" href="#">CarolinaPay</a>
      <a id="weather"> Weather </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Useful Links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://sakai.unc.edu">Sakai</a>
              <a class="dropdown-item" href="https://connectcarolina.unc.edu">Connect Carolina</a>
              <a class="dropdown-item" href="https://dining.unc.edu/menu-hours/">CDS</a>
              <a class="dropdown-item" href="https://move.unc.edu/parking/">Parking</a>
              <a class="dropdown-item" href="https://library.unc.edu/">Library</a>
              <a class="dropdown-item" href="https://campusrec.unc.edu/">Rec</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-success btn-sm my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      
      <a href="login/create.html"><button class="btn btn-light btn-sm my-2 my-sm-0" type="submit" id="signupbtn">Sign up</button>
      <a href="login/index.html"><button class="btn btn-dark btn-sm my-2 my-sm-0" type="submit" id="loginbtn">Log in</button>
    </nav>
    `);
    } else {
      $('body').prepend(`
      <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-unc fixed-top">
        <a class="navbar-brand" href="#">CarolinaPay</a>
        <a id="weather"> Weather </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Useful Links
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://sakai.unc.edu">Sakai</a>
                <a class="dropdown-item" href="https://connectcarolina.unc.edu">Connect Carolina</a>
                <a class="dropdown-item" href="https://dining.unc.edu/menu-hours/">CDS</a>
                <a class="dropdown-item" href="https://move.unc.edu/parking/">Parking</a>
                <a class="dropdown-item" href="https://library.unc.edu/">Library</a>
                <a class="dropdown-item" href="https://campusrec.unc.edu/">Rec</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input id="autocomplete" autocomplete="off" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success btn-sm my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        
        <button class="btn btn-dark btn-sm my-2 my-sm-0" type="submit" id="logoutbtn">Log out</button>
      </nav>
      `);
      $(`#logoutbtn`).on('click', () => {
        localStorage.setItem("jwt", "out");
        window.location.reload();
      });
    }


    console.log("nav ready");
    $('body').prepend(`<div style="height: 100px;"></div>`);


    $('body').append(` 
    <div class="container" style="height: 1000px">
      <div class="row">
        <div class="col" id="profile"> </div>
        <div class="col-6" id="feed"> </div>
        <div class="col" id="contact"> </div>
      </div>


    </div>

    <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">CarolinaPay @ Fall 2019 COMP 426 Final Project by Team DuGuai</span>
      </div>
    </footer>


    `);

  }

$(document).ready(loadNav());
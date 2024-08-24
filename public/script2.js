// custom header and footer 
console.log("hello");
class customHeader extends HTMLElement {  
    //conncetedCallback() method is called everytime the element is added so all the html  here 
    connectedCallback(){
            this.innerHTML=`<header>
            <nav>
              <div class="container" style="display: flex; justify-content: center">
                <div class="col-lg-4 col-md-5 col-sm-12 mx-2 toggle" id="nav1">
                  <ul>
                    <svg style="position:relative; top:60px" id="favicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                      <path d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z" fill="#813588"></path>
                    </svg>
                    <li id="cross">
                      <i class="bi bi-x" style="font-size: 40px"></i>
                    </li>
                    <a href="#" class="navitem">
                      <li class="home hidenav">
                        <i class="bi bi-house bicon"></i>Home
                      </li></a
                    >
                    <a href="#courses" class="navitem">
                      <li class="courses">
                        <div id="courseoffered">
                          <i class="bi bi-book bicon"></i>Courses<img
                            class="dropdown"
                            src="./assets/down-arrow.png"
                            alt=""
                          />
                        </div>
                        <div class="toggle" id="engineeringList">
                          <ul>
                            <a href="./public/courses.html" class="navitem"
                              ><li>CSE</li></a
                            >
                            <li class="hidenav">ECE</li>
                            <li class="hidenav">Mechanical</li>
                            <li class="hidenav">Civil</li>
                          </ul>
                        </div>
                      </li></a
                    >
                    <a href="http://localhost:5000/" class="navitem">
                      <li class="hidenav">
                        <i class="bi bi-code bicon"></i>
                        Programming
                      </li>
                    </a>
                    <a href="#newcourses" class="navitem">
                      <li class="hidenav">
                        <i class="bi bi-collection bicon"></i>
                        New Courses
                      </li></a
                    >
                    <a href="https://adityatiwari-art.github.io/portfolio/" class="navitem">
                      <li class="hidenav">
                        <i class="bi bi-person bicon"></i>About us
                      </li>
                    </a>
                    <a href="https://codepip.com/games/" class="navitem">
                    <li >
                      <i class="bi bi-controller bicon"></i>Programming Games
                    </li></a>
      
                    <li class="lottieAnimation toggle">
                      <dotlottie-player
                        class="animationLaptop"
                        src="https://lottie.host/d56438f9-4ac1-4225-86fc-8f2b80a30ac7/BsLZevPWd0.json"
                        background="transparent"
                        speed="1"
                        style="width: 300px; height: 300px"
                        loop
                        autoplay
                      ></dotlottie-player>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="nav2">
                <img id="burger" src="assets/hamburger.png" alt="loading" />
                <div
                  class="educloud"
                  style="
                    width: 70%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <a href="./index.html"
                    ><svg
                      id="favicon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z"
                        fill="#813588"
                      ></path>
                    </svg>
                  </a>
                  <div class="logo">Edu<span>Cloud</span></div>
                </div>
                <button class="contact">Sign in</button>
              </div>
            </nav>
          </header>
      `
    }
    
}
class customFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <div class="container" >
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top w-100">
            <div class="col-md-4 d-flex align-items-center">
              <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
              </a>
              <span class="mb-3 mb-md-0 text-muted">© 2024 EduCloud, Inc</span>
            </div>
        
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3"><a class="text-muted" href="https://twitter.com/AdityaT9143173"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
              </svg></a></li>
              <li class="ms-3"><a class="text-muted" href="https://github.com/adityatiwari-art"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg></a></li>
              <li class="ms-3"><a class="text-muted" href="https://adityatiwari-art.github.io/portfolio/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg></a></li>
            </ul>
          </footer>
        </div>`
    }

}

customElements.define('custom-header',customHeader);
customElements.define('custom-footer',customFooter);

class customHeader1 extends HTMLElement {  
    //conncetedCallback() method is called everytime the element is added so all the html  here 
    connectedCallback(){
            this.innerHTML=`<header>
            <nav>
              <div class="container smallscreen" style="display: flex; justify-content: center">
                <div
                class="col-lg-4 col-md-5 col-sm-12 mx-2 toggle"
                  id="nav1"
                >
                  <ul>
                    <svg style="position:relative; top:60px" id="favicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                      <path d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z" fill="#813588"></path>
                    </svg>
                    <li id="cross">
                      <i class="bi bi-x" style="font-size: 40px"></i>
                    </li>
                    <a href="../index.html" class="navitem">
                    <li class="home hidenav"><i class="bi bi-house bicon"></i>Home</li></a>
                     <li class="courses">
                      <div id="courseoffered">
                        <i class="bi bi-book bicon" class="navitem"></i>Courses<img
                          class="dropdown"
                          src="../assets/down-arrow.png"
                          alt=""
                        />
                      </div>
                      <div class="toggle" id="engineeringList">
                        <ul>
                          <a href="./courses.html" class="navitem"><li>CSE</li></a>
                          <li class="hidenav">ECE</li>
                          <li class="hidenav">Mechanical</li>
                          <li class="hidenav">Civil</li>
                        </ul>
                      </div>
                    </li>
                   <a href="http://localhost:5000/" class="navitem">
                    <li class="hidenav">
                      <i class="bi bi-code bicon"></i>
                      Programming<img
                        class="dropdown"
                        src="../assets/down-arrow.png"
                        alt=""
                      />
                    </li>
                  </a>
                  <a href="../index.html#newcourses" class="navitem">
                  <li class="hidenav">
                    <i class="bi bi-collection bicon"></i>
                    New Courses
                  </li></a>
                  <a href="https://adityatiwari-art.github.io/portfolio/" class="navitem">
                    <li class="hidenav">
                      <i class="bi bi-person bicon"></i>About us
                    </li>
                  </a>
                  <a href="https://codepip.com/games/" class="navitem">
                  <li>
                    <i class="bi bi-controller bicon"></i>Programming Games
                  </li></a>
                  <li class="lottieAnimation toggle">
                      <dotlottie-player
                        class="animationLaptop"
                        src="https://lottie.host/d56438f9-4ac1-4225-86fc-8f2b80a30ac7/BsLZevPWd0.json"
                        background="transparent"
                        speed="1"
                        style="width: 300px; height: 300px"
                        loop
                        autoplay
                      ></dotlottie-player>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="nav2">
                <img id="burger" src="../assets/hamburger.png" alt="loading" />
                <div
                class="educloud"
                  style="
                    width: 70%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                <a href="../index.html"><svg
                    id="favicon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                      height="36"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z"
                      fill="#813588"
                    ></path>
                  </svg>
                  </a>
                  <div class="logo">Edu<span>Cloud</span></div>
                </div>
                <button class="contact">Sign in</button>
              </div>
            </nav>
          </header>
      `
    }
    
}

customElements.define('custom-header1',customHeader1);


class signInHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <nav>
          <div class="container" style="display: flex; justify-content: center">
            <div class="col-lg-4 col-md-5 col-sm-12 mx-2 toggle" id="nav1">
              <ul>
                <svg style="position:relative; top:60px" id="favicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
                  <path d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z" fill="#813588"></path>
                </svg>
                <li id="cross">
                  <i class="bi bi-x" style="font-size: 40px"></i>
                </li>
                <a href="./index.html" class="navitem">
                  <li class="home hidenav">
                    <i class="bi bi-house bicon"></i>Home
                  </li></a
                >
                <a href="#courses" class="navitem">
                  <li class="courses">
                    <div id="courseoffered">
                      <i class="bi bi-book bicon"></i>Courses<img
                        class="dropdown"
                        src="./assets/down-arrow.png"
                        alt=""
                      />
                    </div>
                    <div class="toggle" id="engineeringList">
                      <ul>
                        <a href="./public/courses.html" class="navitem"
                          ><li>CSE</li></a
                        >
                        <li class="hidenav">ECE</li>
                        <li class="hidenav">Mechanical</li>
                        <li class="hidenav">Civil</li>
                      </ul>
                    </div>
                  </li></a
                >
                <a href="http://localhost:5000/" class="navitem">
                  <li class="hidenav">
                    <i class="bi bi-code bicon"></i>
                    Programming
                  </li>
                </a>
                <a href="#newcourses" class="navitem">
                  <li class="hidenav">
                    <i class="bi bi-collection bicon"></i>
                    New Courses
                  </li></a
                >
                <a href="#" class="navitem">
                  <li class="hidenav">
                    <i class="bi bi-person bicon"></i>About us
                  </li>
                </a>
                <a href="https://codepip.com/games/" class="navitem">
                <li >
                  <i class="bi bi-controller bicon"></i>Programming Games
                </li></a>
  
                <li class="lottieAnimation toggle">
                  <dotlottie-player
                    class="animationLaptop"
                    src="https://lottie.host/d56438f9-4ac1-4225-86fc-8f2b80a30ac7/BsLZevPWd0.json"
                    background="transparent"
                    speed="1"
                    style="width: 300px; height: 300px"
                    loop
                    autoplay
                  ></dotlottie-player>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav2">
            <img id="burger" src="assets/hamburger.png" alt="loading" />
            <div
            class="educloud"
              style="
                width: 70%;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <a href="./index.html"
                ><svg
                  id="favicon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M37.83 78.62L37.83 78.62Q33.79 78.62 31.44 76.27Q29.09 73.92 29.09 69.88L29.09 69.88L29.09 30.12Q29.09 26.08 31.44 23.73Q33.79 21.38 37.83 21.38L37.83 21.38L68.85 21.38Q69.50 22.41 70.02 24.01Q70.54 25.61 70.54 27.58L70.54 27.58Q70.54 31.06 69.03 32.66Q67.53 34.25 64.90 34.25L64.90 34.25L45.06 34.25L45.06 43.00L66.22 43.00Q66.87 44.03 67.39 45.63Q67.91 47.23 67.91 49.20L67.91 49.20Q67.91 52.68 66.40 54.23Q64.90 55.78 62.27 55.78L62.27 55.78L45.06 55.78L45.06 65.65L69.22 65.65Q69.88 66.68 70.40 68.38Q70.91 70.07 70.91 72.04L70.91 72.04Q70.91 75.52 69.41 77.07Q67.91 78.62 65.28 78.62L65.28 78.62L37.83 78.62Z"
                    fill="#813588"
                  ></path>
                </svg>
              </a>
              <div class="logo">Edu<span>Cloud</span></div>
            </div>
          </div>
        </nav>
      </header>`
    }
}

customElements.define('signIn-header',signInHeader);


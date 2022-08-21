        <div class="col-12 col-sm-12 col-md-6 col-xl-3 col-xxl-3">
            <div class="card flip-card">
              <div class="flip-card-inner">
                <div class="flip-card__front">
                  <img
                    src="https://source.unsplash.com/random"
                    alt="random img"
                  />
                </div>

                <div class="flip-card__back">
                  <h1>Mehsul 1</h1>
                  <span>Stokda yoxdur</span>
                  <span>4000 AZN</span>
                </div>
              </div>
            </div>
        </div>

          const myRowElement = document.getElementById('row-element')

          window.onload = getAllProducts

          
          async function getAllProducts() {
            const url = 'products.json'

            try {
                const myStringData = await fetch(url)
                const myJSONData = await myStringData.json()

                for(let i=0; i<myJSONData.length; i++) {
                    myRowElement.innerHTML += 

                    '
                    
                    '
                }
            }

            catch(e) {}
          }
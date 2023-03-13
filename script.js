let artIllustrations = [];
fetch("art.json")
    .then(response => response.json())
    .then(data => {
        artIllustrations = data.Illustrations;
        console.log(artIllustrations);
        var dynamicCards= '';
        artIllustrations.forEach(el => {
            dynamicCards += `
                <div>
                    <h1>${el.title}</h1>
                    <p class="card-info">
                        "<span>
                            ${el.description}
                        </span>"
                        <br/>
                        <br/>
                        <i class="fa-brands fa-ethereum"></i> ${el.price}
                    </p>
                    <img src=${el.imageUrl} class="card-image"/>
                </div>
            `
        });
        document.getElementById('bannerContainer').innerHTML = dynamicCards;
    });
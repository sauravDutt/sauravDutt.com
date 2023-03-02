let artIllustrations = [];
fetch("art.json")
    .then(response => response.json())
        .then(data => {
            artIllustrations = data.Illustrations;
            console.log(artIllustrations);
            artIllustrations.forEach(el => {
            console.log("This is the Title of Illustrations :  -  "+el.title);
            console.log("This is the Description of Illustrations :  -  "+el.description);
        });
    });
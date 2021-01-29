let squareCount = -1;

document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Add Square');
    document.body.appendChild(button);
    button.appendChild(buttonText);
    button.id = 'addButton'
    button.addEventListener('click', addSquareClick);
    button.style.display = 'block';

    function addSquareClick() {
        createDiv();
    }
    
    function createDiv() {
        squareCount++;
        let div = document.createElement('div');
        let innerDiv = document.createElement('div');
        let innerDivText = document.createTextNode(squareCount.toString());
        document.body.appendChild(div);
        div.appendChild(innerDiv);
        innerDiv.appendChild(innerDivText);
        // div.appendChild(divText)
        div.className = 'squares';
        innerDiv.className = 'innerDiv';
        div.id = squareCount.toString();
        div.style.backgroundColor = 'black';
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.margin = '10px 10px'
        div.style.display = 'inline-block';
        innerDiv.style.visibility = 'hidden';
    
        console.log(squareCount)
        // makes innerDiv style to visible on mouseover and style to hidden on mouseout
        div.addEventListener('mouseover', function () {
            innerDiv.style.visibility = "visible";
            //event.target.style.visibility = innerDiv;
        });
        div.addEventListener('mouseout', function () {
            innerDiv.style.visibility = 'hidden';
            //event.target.style.visibility = innerDiv;
        });
        //click square changes color
        let colorsArray = ["black", "blue", "turqoise", "green", "purple", "orange", "yellow", "grey"];
        div.addEventListener('click', function () {
            const random = Math.floor(Math.random() * colorsArray.length);
            div.style.backgroundColor = colorsArray[random];
        });
    
        //  When a square is double clicked, the following should occur:
        // * If the `id` of the square is even:
        // * The square after the clicked square should be removed from the page
        // * If there isn't a square after the clicked square, display an alert indicating so
        // * If the `id` of the square is odd:
        // * The square before the clicked square should be removed from the page
        // * If there isn't a square before the clicked square, display an alert indicating so
        div.addEventListener('dblclick', function () {
            if (!div.nextSibling && div.id % 2 == 0) {
                alert('No next square')
            }
            else if (div.id % 2 == 0) {
                document.body.removeChild(div.nextSibling)
            }
            
            else if (div.id % 2 == !0 && div.previousSibling.id >= 0 ) {
                document.body.removeChild(div.previousSibling)
            }
            else{
               alert('No priors')
           }
     });
    
    }
});


// function addSquareClick() {
//     createDiv();
// }

// function createDiv() {
//     squareCount++;
//     let div = document.createElement('div');
//     let innerDiv = document.createElement('div');
//     let innerDivText = document.createTextNode(squareCount.toString());
//     document.body.appendChild(div);
//     div.appendChild(innerDiv);
//     innerDiv.appendChild(innerDivText);
//     // div.appendChild(divText)
//     div.className = 'squares';
//     innerDiv.className = 'innerDiv';
//     div.id = squareCount.toString();
//     div.style.backgroundColor = 'black';
//     div.style.width = '200px';
//     div.style.height = '200px';
//     div.style.margin = '10px 10px'
//     div.style.display = 'inline-block';
//     innerDiv.style.visibility = 'hidden';

//     console.log(squareCount)
//     // makes innerDiv style to visible on mouseover and style to hidden on mouseout
//     div.addEventListener('mouseover', function () {
//         innerDiv.style.visibility = "visible";
//         //event.target.style.visibility = innerDiv;
//     });
//     div.addEventListener('mouseout', function () {
//         innerDiv.style.visibility = 'hidden';
//         //event.target.style.visibility = innerDiv;
//     });
//     //click square changes color
//     let colorsArray = ["black", "blue", "turqoise", "green", "purple", "orange", "yellow", "grey"];
//     div.addEventListener('click', function () {
//         const random = Math.floor(Math.random() * colorsArray.length);
//         div.style.backgroundColor = colorsArray[random];
//     });

//     //  When a square is double clicked, the following should occur:
//     // * If the `id` of the square is even:
//     // * The square after the clicked square should be removed from the page
//     // * If there isn't a square after the clicked square, display an alert indicating so
//     // * If the `id` of the square is odd:
//     // * The square before the clicked square should be removed from the page
//     // * If there isn't a square before the clicked square, display an alert indicating so
//     div.addEventListener('dblclick', function () {
//         if (!div.nextSibling && div.id % 2 == 0) {
//             alert('No next square')
//         }
//         else if (div.id % 2 == 0) {
//             document.body.removeChild(div.nextSibling)
//         }
        
//     if (!div.previousSibling && !div.id % 2) {
//             alert('No priors')
//         }
//         else if (div.id % 2 == !0) {
//             document.body.removeChild(div.previousSibling)
//         }
//  });

// }


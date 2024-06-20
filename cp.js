// $(document).ready(function(){
//     function add(){
//         $(".copied").addClass("bounce-effect");
//     }
//     function remove(){
//         $(".copied").removeClass("bounce-effect");
//     }

//     $(".copy-btn").click(function(){
//         $("textField").select();
//         document.execCommand("copy");
//         add();
//         setTimeout(remove,800);
//     });
// });




// execcommand depreceated
// so the alternative is below

document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.querySelector(".copy-btn");
    const textField = document.getElementById("textField");
    const copiedSpan = document.querySelector(".copied");

    function addBounceEffect() {
        copiedSpan.classList.add("bounce-effect");
    }

    function removeBounceEffect() {
        copiedSpan.classList.remove("bounce-effect");
    }

    copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(textField.value).then(function () {
            addBounceEffect();
            setTimeout(removeBounceEffect, 800);
        }).catch(function (err) {
            console.error("Could not copy text: ", err);
        });
    });
});




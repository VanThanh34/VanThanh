let arrStars1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let arrStars2 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function findStar() {
    let str = document.getElementById("star").value;
    let found = false;
    for (let i = 0; i < arrStars1.length; i++) {
        if (str.toLowerCase() === arrStars1[i].toLowerCase()) {
            document.getElementById("answer").innerHTML = (`Result: ${arrStars2[i]}`);
            found = true;
            break;
        }
    }
    if (!found) {
        document.getElementById("answer").innerHTML = (`No result for ur star :<`);
    }
}
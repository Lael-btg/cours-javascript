let name = ',votre pizza:Raffinata'
let ingrédientRaf = 'Base Tomate Pesto,jambon,Poulet,Steak,Merguez,Cordon Bleu'
let  = 'Le 20/01/2001'
let politesse = 'Bonjour Mr Curry'
let préparation = 'Est en cours de préparation'
let timing = "elle vous serra livrée d'ici 30 secondes"
let adresse = '1 rue des pissenlis areméens.'
let remerciement = 'Merci d\'avoir commandé chez la pizzeria Raffinata'
let funny ='---'
let joke = 'Qu\'est ce qu\'une pizza dit à une autre pizza qui lui demande des conseil?'
let jrep = '"Suis ta pate et tout ira bien."'
let commande = `${date},
${politesse}, ${name},${ingrédientRaf}
vous serra livrée au ${adresse}
${remerciement}
${funny}
${joke}
${jrep}`
console.log(commande)
var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;
console.log(fullDate);